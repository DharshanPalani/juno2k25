import React from "react";

function Footer() {
  return (
    <footer className="bg-transparent text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display mb-4">Contact Us</h3>
            <p className="mb-2">📍 123 College Road, Campus XYZ</p>
            <p className="mb-2">📱 123-456-7890</p>
            <p>📧 event@college.edu</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-primary-500"
                  onClick={(e) => {
                    e.preventDefault();
                    location.href = "/";
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-primary-500"
                  onClick={(e) => {
                    e.preventDefault();
                    location.href = "/about";
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="hover:text-primary-500"
                  onClick={(e) => {
                    e.preventDefault();
                    location.href = "/events";
                  }}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary-500"
                  onClick={(e) => {
                    e.preventDefault();
                    location.href = "/contact";
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-display mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-primary-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/juno_2k25"
                  className="hover:text-primary-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-display mb-4">About Us</h3>
            <p className="mb-2">
              Juno College Event is dedicated to organizing engaging and memorable events for our community. We aim to connect students and enhance campus life.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; Juno 2025 Inter-College Event. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
