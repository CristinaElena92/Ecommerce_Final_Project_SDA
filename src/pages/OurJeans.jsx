import NavigateButtons from '../components/OurJeansComponents/NavigateButtons';
import { ProductContext } from '../App';
import { SearchContext } from '../components/Navbar/Search/UseContext';
import { HeartStraight, ShoppingCart } from 'phosphor-react';
import MiniCart from '../components/PagesNav/MiniCart';
import FavoritesList from '../components/PagesNav/FavoritesList';
import { useContext, useState } from 'react';

const OurJeans = () => {
  const { imageSrc } = useContext(SearchContext); // Imaginea căutată
  const categories = useContext(ProductContext); // Categorii de produse
  const [selectedCategory, setSelectedCategory] = useState('sale'); // Categoria selectată
  const [zoomedImage, setZoomedImage] = useState(null); // Imaginea măritată
  const [selectedSizes, setSelectedSizes] = useState({}); // Dimensiunile selectate
  const [cart, setCart] = useState([]); // Produsele adăugate în coș, cu cantitate
  const [miniCartOpen, setMiniCartOpen] = useState(false); // deschiderea/închiderea mini-coșului
  const [favorites, setFavorites] = useState([]); //  lista de favorite
  const [favoritesOpen, setFavoritesOpen] = useState(false); // deschiderea/închiderea listei de favorite



  // Funcție pentru adăugarea în favorite
  const addToFavorites = (product) => {
    if (favorites.some((item) => item.id === product.id && item.size === selectedSizes[product.id])) {
      alert('This item is already in favorites.');
      return;
    }
    const newFavorite = { ...product, size: selectedSizes[product.id] };
    setFavorites([...favorites, newFavorite]);
  };

  // Funcție pentru eliminarea din favorite
  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter((item) => !(item.id === productId && item.size === selectedSizes[productId]));
    setFavorites(updatedFavorites);
  };

  // Funcție pentru schimbarea categoriei
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Funcție pentru schimbarea dimensiunii
  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: size,
    }));
  };

  // Funcție pentru adăugarea produsului în coș
  const addToCart = (product) => {
    const cartItem = cart.find((item) => item.id === product.id && item.size === selectedSizes[product.id]);
    if (!selectedSizes[product.id]) {
      alert('Please select a size.');
      return;
    }
    if (cartItem) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id && item.size === selectedSizes[product.id]) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, size: selectedSizes[product.id], quantity: 1 }];
      setCart(updatedCart);
    }
  };

  // Funcție pentru actualizarea cantității în coș
  const updateQuantity = (productId, size, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.size === size) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Funcție pentru eliminarea produsului din coș
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => !(item.id === productId && item.size === selectedSizes[productId]));
    setCart(updatedCart);
    // Închide imaginea măritată dacă produsul eliminat era cel vizualizat
    if (zoomedImage && cart.some(item => item.images[0] === zoomedImage)) {
      setZoomedImage(null);
    }
  };

  // Funcție pentru afișarea produselor pentru categoria selectată
  const renderProducts = () => {
    if (!categories || !categories[selectedCategory]) {
      return <div>There are no products available for the selected category.</div>;
    }

    if (selectedCategory === 'sale' && categories[selectedCategory].types.length === 0) {
      return <div>There are no products available on sale.</div>;
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories[selectedCategory].types.map((typeKey) => {
          const typeProducts = categories[selectedCategory].images[typeKey];
          if (!typeProducts || typeProducts.length === 0) {
            return <div key={typeKey}>There are no products available for {typeKey}.</div>;
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
                  <p className="text-gray-600">{product.price}</p>

                  {/* Selectia dimensiunii */}
                  <div className="mt-2">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                      Choose the size:
                    </label>
                    <select
                      className="bg-gray-200 border border-gray-300 rounded-lg p-2"
                      value={selectedSizes[product.id] || ''}
                      onChange={(e) => handleSizeChange(product.id, e.target.value)}
                    >
                      <option value="">Select size...</option>
                      {product.size.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-between mt-4">
                    {/* Butonul pentru adăugarea în coș */}
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart size={25} color="black" />
                    </button>
                    {/* Butonul pentru adăugarea în favorite */}
                    <button
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                      onClick={() => addToFavorites(product)}
                    >
                      <HeartStraight size={25} color="black" />
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
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-500 opacity-95 p-4">
      <div className="mb-8">
        <img
          src="/img/Sale0.png"
          alt="Imagine Antet"
          className="w-full rounded-lg shadow-md"
        />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <NavigateButtons onCategoryChange={handleCategoryChange} />
        </div>

        {imageSrc && (
          <div className="flex justify-center mb-8">
            <img
              src={imageSrc}
              alt="Jeans"
              className="max-w-xs rounded-lg shadow-md"
            />
          </div>
        )}

        <div>{renderProducts()}</div>

        {/* Butonul pentru deschiderea mini-coșului */}
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors z-50"
          onClick={() => setMiniCartOpen(!miniCartOpen)}
        >
          <ShoppingCart size={25} color="white" />
          {cart.length > 0 && (
            <span className="ml-2">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
          )}
        </button>

        {/* Butonul pentru deschiderea listei de favorite */}
        <button
          className="fixed bottom-16 right-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors z-50"
          onClick={() => setFavoritesOpen(!favoritesOpen)}
        >
          <HeartStraight size={25} color="white" />
          {favorites.length > 0 && (
            <span className="ml-2">{favorites.length}</span>
          )}
        </button>

        {/* Componenta pentru mini-coș */}
        {miniCartOpen && (
          <MiniCart
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        )}

        {/* Componenta pentru lista de favorite */}
        {favoritesOpen && (
          <FavoritesList
            favorites={favorites}
            removeFromFavorites={removeFromFavorites}
          />
        )}
      </div>
    </div>
  );
};

export default OurJeans;
