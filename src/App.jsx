import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import backgroundImage from './images/PC.png';

// Pages for the Routes
import Home from './pages/Home';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div 
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh' 
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
