import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white font-script italic">
        New Collections        </h2>
          {/* <h3 className="text-3xl font-bold text-gray-800">New Collections</h3> */}
          
          <p className="text-sm text-ellipsis">Jeans for you</p>
        </div>
      </div>

      {/* Carousel section */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {/* Product cards */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/img/imgcarousel/woman/flared1.jpg"
            alt="product image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">Flared Jeans</h2>
              <p className="text-lg mb-4">130 €</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem!
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border-2 border-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/img/imgcarousel/man/loose1.jpg"
            alt="product image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">Loose Fit Jeans</h2>
              <p className="text-lg mb-4">300 €</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem!
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border-2 border-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/img/imgcarousel/woman/skinny1.jpg"
            alt="product image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">Skinny Jeans</h2>
              <p className="text-lg mb-4">200 €</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem!
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border-2 border-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/img/imgcarousel/man/skinny1.jpg"
            alt="product image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">Skinny Jeans</h2>
              <p className="text-lg mb-4">200 €</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem!
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border-2 border-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        
        
      </Carousel>
    </div>
  );
};

export default Products;
