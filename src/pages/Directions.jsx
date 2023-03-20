import React, { useState, useEffect, useRef} from 'react';
import * as tt from '@tomtom-international/web-sdk-maps';
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { services } from '@tomtom-international/web-sdk-services';
import SearchBox from '@tomtom-international/web-sdk-plugin-searchbox';
import '@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css';
import '../App.css'


export const Directions = () => {    
    const origin = {
      lng : -121.14464088099494,
      lat : 36.20915001679774
    }
    const mapElement = useRef()
    const [longitude, setLongitude] = useState(origin.lng)
    const [latitude, setLatitude] = useState(origin.lat)

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

    const addSearchBox = (map)=>{
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
        console.log(data)
        setLongitude(data.result.position['lng']);
        setLatitude(data.result.position['lat']);
      })
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
          }

          addSearchBox(mapInstance);
          
          return () => mapInstance.remove();
    }, [longitude, latitude])

  return (
    <div class='flex justify-center'>
        <div ref={mapElement} class='h-screen w-full border-stone-400 border-t-2 relative sm:h-[45rem]'/>
    </div>
  )
}
