import './App.css'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Calander } from './pages/Calander';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <section class='snap-start'>
      <Home/>
      </section>
      <section class='snap-mandatory'>
      <Calander/>
      </section>
      
    </div>
  );
}

export default App;
