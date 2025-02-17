function Footer() {
  return (
    <footer className="bg-transparent text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display mb-4">Contact Us</h3>
            <p className="mb-2">📍 161, Guru Nanak Salai, Velachery, Chennai - 600042 </p>
            <p>📧 juno@gurunankcollege.edu.in</p>
          </div>
          <div>
            <h3>For quries</h3>
            <br />
            <p>Nirmal G (Chairman) </p>
            <p> +91 74490 69661 </p>
            <br />
            <p> Mithun S (Vice-Chairman) </p>
            <p> +91 7358 434078 </p>
            <br />
            <p> Lakshmi R (Vice-Chairman) </p>
            <p> +91 95662 66967 </p>
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
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; Juno 2025 Inter-College Event. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
