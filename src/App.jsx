import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About/About';
import Contact from './pages/contact us/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Box } from '@mui/material';
import Servicespage from './pages/services/Servicespage';
import SolarService from './components/serviceslist/SolarEnergy';
import Windpower from './components/serviceslist/windpower';
function App() {
  return (
    <Router>
       <Header />
      <Box sx={{ pt: '120px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/services/solar-energy" element={<SolarService/>} />
         <Route path="/services/wind-power" element={<Windpower/>} />
      </Routes>
      </Box>
      <Footer/>
    </Router>
  );
}

export default App;