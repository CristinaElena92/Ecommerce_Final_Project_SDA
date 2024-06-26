import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/img/ourjeans0303.jpg',
    '/img/sale/car2.jpg',
    '/img/sale/car003.jpg'
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
    <div className="relative h-screen md:h-[calc(100vh-80px)]">
      <div className="relative h-full">
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
             className="w-full h-full object-cover xs:object-contain mt-[-50]"
            />
            
          </div>
        ))}
        {/* Button Shop */}
        <div className="flex items-center justify-center absolute bottom-10 left-0 right-0">
          <Link
            to="/ourJeans"
            className="relative group overflow-hidden"
            style={{ zIndex: 10 }}
          >
            {/* Textul butonului */}
            <span className="relative z-10 text-lg font-medium text-white border-4 border-double border-white px-8 py-3 rounded transition-colors duration-300 ease-out bg-opacity-0 group-hover:text-white">
              Shop Now
            </span>

            {/* Glow effect */}
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>

            {/* Overlay effect */}
            <span className="absolute left-0 top-0 h-full w-0 bg-black opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
