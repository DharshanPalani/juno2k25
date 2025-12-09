function Footer() {
  return (
    <footer className="text-white py-8 sm:py-12 mt-8 sm:mt-12 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg sm:text-xl font-display">Contact Us</h3>
            <p>📍 161, Guru Nanak Salai, Velachery, Chennai - 600042</p>
            <p>📧 juno@gurunankcollege.edu.in</p>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-lg sm:text-xl font-display">For Queries</h3>
            {[
              { name: "Nirmal G (Chairman)", phone: "+91 74490 69661" },
              { name: "Mithun S (Vice-Chairman)", phone: "+91 94445 29389" },
              { name: "Lakshmi R (Vice-Chairman)", phone: "+91 95662 66967" },
            ].map((contact) => (
              <div key={contact.phone} className="space-y-1">
                <p className="font-semibold">{contact.name}</p>
                <p>📞 {contact.phone}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-3 items-start sm:items-center text-left sm:text-center">
            <h3 className="text-lg sm:text-xl font-display">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Event", path: "/events" },
                { name: "Team", path: "/team" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="hover:text-primary-500"
                    onClick={(e) => {
                      e.preventDefault();
                      location.href = link.path;
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <h3 className="text-lg sm:text-xl font-display">Follow Us</h3>
            <a
              href="https://instagram.com/juno_2k25"
              className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center bg-black/50 text-white rounded-2xl transition-all duration-300 hover:bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16 sm:w-20 sm:h-20"
              >
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zM7.75 3.5h8.5c2.344 0 4.25 1.906 4.25 4.25v8.5c0 2.344-1.906 4.25-4.25 4.25h-8.5c-2.344 0-4.25-1.906-4.25-4.25v-8.5c0-2.344 1.906-4.25 4.25-4.25zM18 6.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 7.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm0 1.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm">
          <p>&copy; Juno 2025 Inter-College Event. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
