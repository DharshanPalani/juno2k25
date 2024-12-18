import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSec";
import EventBar from "./components/EventBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen">
      <Navbar />
      <HeroSection />
      <EventBar />
      <Footer />
    </div>
  );
}

export default App;
