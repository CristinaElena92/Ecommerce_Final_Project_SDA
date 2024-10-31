import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/img/carousel22/ourjeans0303.jpg',
    '/img/carousel22/man02.jpg',
    '/img/carousel22/skinny05.jpg',
    '/img/carousel22/3.png',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
<div className="relative h-[calc(20vh-20px)] sm:h-[calc(50vh-30px)] md:h-[calc(80vh-50px)]">
   
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover sm:w-full md:w-full lg:w-full xl:w-full"
              />
          </div>
        ))}

      <div className="flex items-center justify-center absolute bottom-4 sm:bottom-10 left-0 right-0 px-4 sm:px-0 mt-2 sm:mt-0">
  <Link
    to="/ourJeans"
    className="relative group overflow-hidden"
    style={{ zIndex: 10 }}
  >
<span className="relative z-10 text-base  sm:text-base font-medium text-white border-2 sm:border-4 border-double border-white px-4 sm:px-8 py-2 sm:py-3 rounded transition-colors duration-300 ease-out bg-opacity-0 group-hover:text-white">
Shop Now
            </span>
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
            <span className="absolute left-0 top-0 h-full w-0 bg-black opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
        </div>
      </div>
   
  );
};

export default Carousel;
