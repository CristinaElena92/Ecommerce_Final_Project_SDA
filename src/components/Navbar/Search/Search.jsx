import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./UseContext";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const JeansData = {
  skinny: '/img/imgcarousel/woman/skinny1.jpg',
  // Adaugă mai multe tipuri de jeanși aici
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setImageSrc } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    if (JeansData[term]) {
      setImageSrc(JeansData[term]);
      navigate('/ourJeans');
    } else {
      setImageSrc('');
      alert('Sold out');
    }
  };

  useEffect(() => {
    setImageSrc('');
  }, [setImageSrc]);

  return (
    <div className="flex items-center justify-center p-2 md:p-0">
      <div className="flex items-center w-full max-w-md bg-gradient-to-r from-gray-600  rounded shadow-lg ">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 text-gray-700 border-none rounded-l focus:outline-none hover:shadow-lg hover:shadow-red-500/50 text-sm sm:text-base md:text-lg lg:text-md px-2 sm:px-4 py-1 transition-all duration-300"
        />
        <button
          className="flex items-center justify-center p-2  hover:shadow-lg hover:shadow-red-500/50 text-sm sm:text-base md:text-lg lg:text-md px-2 sm:px-4 py-1 transition-all duration-30000"
          onClick={handleSearch}
        >
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Search;