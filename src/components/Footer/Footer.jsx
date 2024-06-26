const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-red-800 bg-opacity-100 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Links section */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="flex flex-col space-y-4">
              <a href="/contact" className="hover:text-red-600">Contact</a>
              <a href="/privacy" className="hover:text-red-600">Privacy Policy</a>
              <a href="/terms" className="hover:text-red-600">Terms of Service</a>
              <a href="/faq" className="hover:text-red-600">FAQ</a>
            </div>
          </div>
          
          {/* Newsletter section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full md:w-64 bg-gray-700 rounded py-2 px-3 text-white mb-3 md:mb-0 md:mr-2 focus:outline-none focus:ring focus:ring-gray-400"
              />
              <button
                type="submit"
                className="bg-red-600 text-white rounded py-2 px-4 hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-400 mt-3 md:mt-0"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Copyright section */}
          <div className="text-center md:text-right lg:text-center col-span-4 mt-4 md:mt-0">
            <p className="text-sm text-gray-400">&copy; 2024 Denim by Jeans Couture - Official Store.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
