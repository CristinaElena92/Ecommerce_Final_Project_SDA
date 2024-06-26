
import PropTypes from 'prop-types'; 
import { Button } from '@material-tailwind/react';

const NavigateButtons = ({ onCategoryChange }) => {
  const buttons = ['Man', 'Woman', 'Sale'];

  return (
    <div className="flex items-center justify-center py-10 space-x-4">
      
      {buttons.map((button, index) => (
        <div key={index} className="relative group">
          <Button
            onClick={() => onCategoryChange(button.toLowerCase())}
            className="relative z-10 text-lg font-medium text-white border-4 border-double border-white px-8 py-3 overflow-hidden rounded transition-colors duration-300 ease-out bg-opacity-0 group-hover:text-black"
            color="transparent"
            size="lg"
            ripple={true}
          >
            {/* Glow effect */}
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>

            {/* Overlay effect */}
            <span className="absolute left-0 top-0 h-full w-0 bg-white opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
            
            {/* Button text */}
            <span className="relative">{button}</span>
          </Button>
        </div>
      ))}
    </div>
  );
};

NavigateButtons.propTypes = {
  onCategoryChange: PropTypes.func.isRequired, 
};

export default NavigateButtons;
