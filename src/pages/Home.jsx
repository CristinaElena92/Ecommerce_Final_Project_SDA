import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import Products from '../components/Carousel/Products';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-500">
      {/* Carousel */}
      <Carousel />

    {/* Shopping section */}
<div className="mt-10 text-center flex justify-center">
  <div className="max-w-screen-lg w-full">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white font-script italic">
      Your dream
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
      {/* Men */}
      <div className="relative flex justify-center">
        <div className="border-4 border-white rounded-lg overflow-hidden w-full max-w-xs h-100 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-white bg-gray-900 bg-opacity-80 px-4 py-2">
            Men
          </h3>
          <div className="flex justify-center">
            <img
              src="/img/homeman.png"
              alt="Denim pentru bărbați - imagine de prezentare"
              className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-125 rounded-lg"
            /> 
          </div>
          <div className="flex justify-center mt-6 mb-4">
            <Link
              to="/ourJeans"
              className="inline-block bg-gradient-to-b from-red-600 to-red-700 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
  {/* Summer Sale */}
  <div className="relative">
      <div className="border-4 border-white rounded-lg overflow-hidden w-full h-100 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-white bg-gray-900 bg-opacity-80 px-4 py-2">
          Summer Sale
        </h3>
        <div className="flex justify-center">
          <img
            src="/img/carousel/carousel1.png"
            alt="Ofertă de vară"
            className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-125 rounded-lg"
          />
        </div>
        <div className="flex justify-center mt-6 mb-4">
          <Link
            to="/ourJeans"
            className="inline-block bg-gradient-to-b from-red-600 to-red-700 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>

      {/* Women */}
      <div className="relative flex justify-center">
        <div className="border-4 border-white rounded-lg overflow-hidden w-full max-w-xs h-100 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-white bg-gray-900 bg-opacity-80 px-4 py-2">
            Women
          </h3>
          <div className="flex justify-center">
            <img
              src="/img/homewoman.png"
              alt="Denim pentru femei - imagine de prezentare"
              className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-125 rounded-lg"
            />
          </div>
          <div className="flex justify-center mt-6 mb-4">
            <Link
              to="/ourJeans"
              className="inline-block bg-gradient-to-b from-red-600 to-red-700 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Products section */}
      <div className="mt-8">
        {/* Card section */}
        <Products />
      </div>
{/* Video section */}
<div className="mt-16 text-center px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white font-script italic">
    Denim by Jeans Couture
  </h2>
  <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-90">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/VOlBl7F6VXE"
      title="Presentation video - Denim by Jeans Couture"
      className="w-full rounded-lg shadow-lg"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</div>

    </div>
  );
};

export default Home;
