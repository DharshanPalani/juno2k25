import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto bg-gradient-to-r from-gray-900 to-gray-800 text-gold-500 opacity-95 shadow-2xl rounded-2xl sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link
          to="/"
          className="text-3xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
        >
          Juno2k25
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-lg font-semibold hover:text-gold-400 transition-all duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="text-lg font-semibold hover:text-gold-400 transition-all duration-300 transform hover:scale-105"
          >
            Events
          </Link>
          <Link
            to="/team"
            className="text-lg font-semibold hover:text-gold-400 transition-all duration-300 transform hover:scale-105"
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold hover:text-gold-400 transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl text-gold-500">☰</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 rounded-lg shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-700 text-gold-500 hover:text-gold-400 transition-all duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="block px-4 py-2 hover:bg-gray-700 text-gold-500 hover:text-gold-400 transition-all duration-300 transform hover:scale-105"
          >
            Events
          </Link>
          <Link
            to="/team"
            className="block px-4 py-2 hover:bg-gray-700 text-gold-500 hover:text-gold-400 transition-all duration-300 transform hover:scale-105"
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-gray-700 text-gold-500 hover:text-gold-400 transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
