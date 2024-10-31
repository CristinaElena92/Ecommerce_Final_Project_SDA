import PropTypes from 'prop-types';
import { HeartStraight } from 'phosphor-react';

const FavoritesList = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="fixed top-0 right-0 z-50 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-2">
        <h3 className="text-lg font-semibold mr-2">Favorites</h3>
        <HeartStraight size={20} />
      </div>
      {favorites.length === 0 ? (
        <p>Your favorites list is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {favorites.map((item) => (
              <li key={item.id} className="py-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img src={item.images[0]} alt={item.name} className="w-12 h-auto rounded-lg mr-2" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="text-red-500 hover:text-red-600 ml-4"
                      onClick={() => removeFromFavorites(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

FavoritesList.propTypes = {
  favorites: PropTypes.array.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

export default FavoritesList;
