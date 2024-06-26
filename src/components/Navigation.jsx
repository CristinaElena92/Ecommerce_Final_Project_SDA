import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="flex justify-center lg:justify-end space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 py-2 ">
        <nav className="flex flex-wrap justify-center">
          <Link
            to="/aboutUs"
            className="text-gray-700 hover:text-black hover:bg-white hover:shadow-lg hover:shadow-red-500/50 text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 py-1 transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            to="/ourJeans"
            className="text-gray-700 hover:text-black hover:bg-white hover:shadow-lg hover:shadow-red-500/50 text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 py-1 transition-all duration-300"
          >
            Our Jeans
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-black hover:bg-white hover:shadow-lg hover:shadow-red-500/50 text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 py-1 transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
