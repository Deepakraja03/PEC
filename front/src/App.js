import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MapComponent from './components/MapComponent';
import MapMatrix from './components/MapMatrix';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<MapComponent />} />
        <Route path='/delivery' element={<MapMatrix />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
