import './App.css'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home'

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      
      <Home/>
    </div>
  );
}

export default App;
