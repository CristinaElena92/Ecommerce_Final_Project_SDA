import { useState } from 'react';

const UserLog = () => {
  
  const [showPopup, setShowPopup] = useState(false);

  const handleSignIn = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-500 flex justify-center items-center h-screen">
      <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl mb-4">Login</h2>
        {/* Formular login */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gradient-to-b from-red-600 to-red-700 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </form>
        {/* Popup*/}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg relative z-10">
              <h3 className="text-2xl mb-4 font-script">Welcome to Denim by Jeans Couture</h3>
              <button
                className="bg-gradient-to-b from-red-600 to-red-700 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
            <div className="fixed inset-0 bg-black opacity-50 z-0" onClick={closePopup}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLog;
