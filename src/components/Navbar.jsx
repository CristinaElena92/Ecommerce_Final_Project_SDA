import { useState } from 'react'
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { Link, } from 'react-router-dom'
import logo from '/img/logo10.png'
import Search from './Navbar/Search/Search'
import {
  

  User,
} from 'phosphor-react'





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  

  let Links = [
    { name: 'About Us', link: '/aboutUs' },
    { name: 'Our Jeans', link: '/ourJeans' },
    { name: 'Contact', link: '/contact' },
  ]

  return (
    <div className="shadow-md w-full relative bg-gradient-to-r from-gray-200 to-gray-700">
      {/* Gradient Bar */}
      <div className="w-full bg-gradient-to-r from-red-700 to-gray-800 text-white py-0.5 text-center text-xs">
        <div className="flex items-center justify-center space-x-4">
          <span className="inline-block w-7 h-7">
            <img
              src="/img/media/fbdark.gif"
              alt="img"
              className="w-full h-full object-cover"
            />
          </span>
          <span className="inline-block w-7 h-7">
            <img
              src="/img/media/whapp.gif"
              alt="img"
            />
          </span>
          <span className="inline-block w-7 h-7">
            <img
              src="/img/media/insta.gif"
              alt="img"
            />
          </span>
        </div>
      </div>

      {/* Navbar Content */}
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center ">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:shadow-md hover:shadow-red-500/50 transition-all duration-300"
        >
          <img
            className="w-24 md:w-32 lg:w-50 h-auto"
            src={logo}
            alt="Logo"
          />
        </Link>

        {/* Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer sm:hidden  "
        >
          {isOpen ? (
            <XMarkIcon />
          ) : (
            <Bars3BottomRightIcon />
          )}
        </div>

         {/* Nav Links */}
      <ul className={`md:flex mt-5 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
        isOpen ? 'top-16 bg-gradient-to-r from-gray-200 to-gray-700' : 'top-[-490px] bg-gray-70'
      } md:translate-y-0 md:relative md:top-auto flex-col md:flex-row items-start md:items-center`}>
        {Links.map((link, index) => (
          <li key={index} className="my-2 md:my-0 md:ml-8 text-gray-800">
            <Link
              to={link.link}
              className="block md:inline-block hover:shadow-lg hover:shadow-red-500/50 text-sm sm:text-base md:text-lg lg:text-md px-2 sm:px-4 py-1 transition-all duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* Search and Icons */}
        <li className="my-2 md:my-0 md:ml-8 md:flex-grow flex items-center justify-left md:justify-end space-x-4">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0">
            <Search />
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link to="/userLog" className="py-2 px-2 rounded hover:shadow-lg hover:shadow-red-500/50">
                <User size={25} color="red"   />
              </Link>
            </div>
          </div>
        </li>
      </ul>
      </div>

      {/* Gradient Bar Bottom */}
      <div className="w-full bg-gradient-to-r from-gray-800 to-red-700 text-white py-0.5 text-center text-xs">
        <span className="text-yellow-300">
          Free Shipping on Orders Over €50!
        </span>
      </div>
      
    </div>
  )
}

export default Navbar
