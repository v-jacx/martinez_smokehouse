import { Routes, Route} from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import { Directions } from './pages/Directions';
import { Home } from './pages/Home'

function App() {

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      
      <main>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/directions' element={ <Directions/> } />
        </Routes>
      </main>

    </div>
  );
}

export default App;
