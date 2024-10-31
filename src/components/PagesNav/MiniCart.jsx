

import PropTypes from 'prop-types';
import { ShoppingCart } from 'phosphor-react'; 

const MiniCart = ({ cart, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Redirecting to checkout page...'); 
    
  };

  return (
    <div className="fixed top-0 right-0 z-50 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-2">
        <h3 className="text-lg font-semibold mr-2">Shopping Cart</h3>
        <ShoppingCart size={20} />
      </div>
      {cart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="py-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img src={item.images[0]} alt={item.name} className="w-12 h-auto rounded-lg mr-2" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="text-gray-600 px-2 py-1 border border-gray-300 rounded"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="text-gray-600 px-2 py-1 border border-gray-300 rounded"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="text-red-500 hover:text-red-600 ml-4"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-end">
            <p className="text-lg font-semibold mr-4">Total: ${calculateTotal()}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

MiniCart.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default MiniCart;
