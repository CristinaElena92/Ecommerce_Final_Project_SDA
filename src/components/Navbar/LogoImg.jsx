// import Navigation from './Navigation';
// import Search from './Search/Search';
// import UserActions from './UserActions';
// import logo from "/img/logo/logo02.png";
// import { Link } from 'react-router-dom';

const LogoImg = () => {
  return (
    <div className="bg-gray-200 shadow-lg py-0.5"> 
      <div className="container mx-auto flex items-left justify-left px-1 lg:px-0">
        {/* Logo */}
        {/* <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              className="w-24 md:w-32 lg:w-60 h-auto" 
              src={logo}
              alt="Logo"
            />
          </Link>
        </div> */}

          {/* Navigation and User Actions */}
          {/* { <div className="flex-grow lg:flex lg:items-center lg:space-x-6 ml-8 "> */}
            {/* Navigation pages*/}
            {/* <nav className="space-x-4 ">
              <Navigation />
            </nav> } */}

            {/* Search */}
            {/* <div className="flex-grow">
              <Search />
            </div> */}

            {/* User Actions */}
            {/* <div className="flex items-center space-x-4">
              <UserActions />
            </div>
          </div> */}

          {/* Mobile Navigation  */}
          {/* <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div> */}
    
      </div>
    </div>
  );
}

export default LogoImg;



// import LogoImg from './Navbar/LogoImg';
// import Media from './Navbar/Media';

// const Navbar = () => {
//   return (
//     <div className="bg-gradient-to-r from-white to-gray-300">
//       <Media />
//       <LogoImg />
//       <div className="bg-gradient-to-b from-red-700 to-gray-800 text-white py-1.5 px-1.5 text-xs lg:px-1 nav-margin">
     
//       </div>
//     </div>
//   );
// };

// export default Navbar;
