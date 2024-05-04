const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-center text-lg font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="flex items-center justify-center flex-col">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-center text-lg font-semibold mb-4">
            Follow Us
          </h2>
          <div className="flex items-center justify-center flex-col">
            <a
              href="https://www.facebook.com/hamza.azhar.3517/"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-azhar-0b7815242/"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/hamza._.002/"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Islamabad, Pakistan</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
