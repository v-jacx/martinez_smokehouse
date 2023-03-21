import React, { useState, useEffect, useRef} from 'react';
import * as tt from '@tomtom-international/web-sdk-maps';
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { services } from '@tomtom-international/web-sdk-services';
import SearchBox from '@tomtom-international/web-sdk-plugin-searchbox';
import '@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css';
import '../App.css'
import { InstructionCard } from '../components/InstructionCard';


export const Directions = () => {    
    const origin = {
      lng : -121.14464088099494,
      lat : 36.20915001679774
    }
    const mapElement = useRef()
    const [longitude, setLongitude] = useState(origin.lng)
    const [latitude, setLatitude] = useState(origin.lat)
    const [guidanceInstructions, setGuidenceInstructions] = useState([])

    // functions
    const addMarker = (map, markerLabel) =>{
        let className = '';
        let lng = 0;
        let lat = 0;

        if(markerLabel==='business'){
           className = "business";
           lng = origin.lng;
           lat = origin.lat;
        }else{
          className = "nav";
          lng = longitude;
          lat = latitude;
        }

        const element = document.createElement('div')
        element.className = className;

        const marker = new tt.Marker({
            element: element,
            anchor: "bottom", 
        })
        .setLngLat([lng, lat])
        .addTo(map);
    }

    const addSearchBox = (map) =>{
      const ttSearchBox = new SearchBox(services,{
          idleTimePress: 100,
          minNumberOfCharacters: 0,
          searchOptions: {
              key: process.env.REACT_APP_TT_KEY,
              language: 'en-GB'
          },
          autocompleteOptions: {
              key: process.env.REACT_APP_TT_KEY,
              language: 'en-GB'
          },
          labels: {
            placeholder: 'Starting Location',
            noResultsMessage: 'No results found.'
          }
      })
      map.addControl(ttSearchBox, 'top-left')
      
      ttSearchBox.on('tomtom.searchbox.resultselected',(e)=>{
        const {data} = e;
        setLongitude(data.result.position['lng']);
        setLatitude(data.result.position['lat']);
      })
    }

    const addRouteBounds = (coordinates, map) =>{
      let bounds = new tt.LngLatBounds();
      coordinates.map((point)=>{
        bounds.extend(tt.LngLat.convert(point));
      });
      if(!bounds.isEmpty()) {
        map.fitBounds(bounds, { duration: 0, padding: 50})
      }
    }

    const route = (map) =>{
        if(map.getLayer('route')){
          map.removeLayer('route');
          map.removeSource('route');
        }

        services.calculateRoute({
        key: process.env.REACT_APP_TT_KEY,
        instructionsType: 'text',
        locations: [[longitude, latitude],[origin.lng, origin.lat]],
      }).then((routeData)=>{
          const geoJson = routeData.toGeoJson();
          const guidance = geoJson.features[0].properties.guidance;

          setGuidenceInstructions(guidance.instructions)

          map.addLayer({
            'id' : 'route',
            'type' : 'line',
            'source' : {
                'type': 'geojson',
                'data' : geoJson
            },
            'paint': {
              'line-color' : '#2faaff',
              'line-width' : 6
            }
          });
          let coordinates = geoJson.features[0].geometry.coordinates;
          addRouteBounds(coordinates, map);
        });
      
    }
  
    useEffect(()=>{
        const mapInstance = tt.map({
            key: process.env.REACT_APP_TT_KEY,
            container: mapElement.current,
            center: [longitude, latitude],
            zoom: 14
          })
          addMarker(mapInstance, 'business');

          if(longitude !== origin.lng && latitude !== origin.lat){
            addMarker(mapInstance, 'nav');
            route(mapInstance);
          }

          addSearchBox(mapInstance);
          
          return () => mapInstance.remove();
    }, [longitude, latitude])

  return (
    <div class='flex justify-center'>
        <div ref={mapElement} class='h-screen w-full border-stone-400 border-t-2 relative sm:h-[45rem]'/>

      { guidanceInstructions.length !==0 ?  
      <div class='absolute flex flex-col content-center gap-3 h-[45%] mt-[76.5%] md:h-screen bg-white md:mr-[70%] md:w-[30%] w-full md:mt-[0.13rem] pt-5 md:pt-16 overflow-y-auto '>
        { guidanceInstructions.map((instruction)=>(
          <InstructionCard instruction={instruction.message}/>
        ))}
      </div> : ''}
    </div>
  )
}
