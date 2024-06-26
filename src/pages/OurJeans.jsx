import { useContext, useState } from 'react';
import NavigateButtons from '../components/OurJeansComponents/NavigateButtons';
import { ProductContext } from '../App';
import { SearchContext } from '../components/Navbar/Search/UseContext';
// import { addToCart } from '../components/features/cartSlice';
// import { useDispatch } from 'react-redux';

const OurJeans = () => {
  
  // const dispatch = useDispatch();

  // Search img
  const { imageSrc } = useContext(SearchContext);

  // Categories and products
  const categories = useContext(ProductContext);

  // Selected category
  const [selectedCategory, setSelectedCategory] = useState('sale');

  // Zoomed image 
  const [zoomedImage, setZoomedImage] = useState(null);

  // Size selection 
  // const [selectedSizes, setSelectedSizes] = useState({});

  // Change Category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle size change
  // const handleSizeChange = (productId, size) => {
  //   setSelectedSizes((prevSizes) => ({
  //     ...prevSizes,
  //     [productId]: size,
  //   }));
  // };

  // Render products for the selected category
  const renderProducts = () => {
    if (!categories || !categories[selectedCategory]) {
      return <div>No products available for the selected category.</div>;
    }

    if (selectedCategory === 'sale' && categories[selectedCategory].types.length === 0) {
      return <div>No products available for sale.</div>;
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories[selectedCategory].types.map((typeKey) => {
          const typeProducts = categories[selectedCategory].images[typeKey];
          if (!typeProducts || typeProducts.length === 0) {
            return <div key={typeKey}>No products available for {typeKey}.</div>;
          }
          return (
            <div key={typeKey} className="bg-white rounded-lg overflow-hidden shadow-lg">
              {typeProducts.map((product) => (
                <div key={product.id} className="p-4">
                  <div className="mb-4 relative">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                      onClick={() => setZoomedImage(product.images[0])}
                    />
                    {zoomedImage === product.images[0] && (
                      <div
                        className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-75"
                        onClick={() => setZoomedImage(null)}
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="max-w-full max-h-full"
                        />
                      </div>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-gray-600">${product.price}</p>
                  
                  {/* Size selection */}
                  <div className="mt-2">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                      Select Size:
                    </label>
                    <select
                      className="bg-gray-200 border border-gray-300 rounded-lg p-2"
                      // value={selectedSizes[product.id] || ''}
                      // onChange={(e) => handleSizeChange(product.id, e.target.value)}
                    >
                      {/* <option value="">Choose size</option>
                      {product.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))} */}
                    </select>
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      
                    >
                      Add to Cart
                    </button>
                    <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors">
                      Add to Favorites
                    </button>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-500  opacity-95 p-4">
      {/* Header image above the product list */}
      <div className="mb-8">
        <img
          src="/img/Sale0.png"
          alt="Header Image"
          className="w-full rounded-lg shadow-md"
        />
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Title and navigation button */}
        <div className="text-center mb-8">
          
          <NavigateButtons onCategoryChange={handleCategoryChange} />
        </div>

        {/* Display search image if it exists */}
        {imageSrc && (
          <div className="flex justify-center mb-8">
            <img
              src={imageSrc}
              alt="Jeans"
              className="max-w-xs rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Product list */}
        <div>{renderProducts()}</div>
      </div>
    </div>
  );
}

export default OurJeans;
