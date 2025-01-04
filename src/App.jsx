import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

//Pages for the Routes
import Home from './pages/Home';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen">
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
