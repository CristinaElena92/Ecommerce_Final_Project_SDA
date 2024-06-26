import { createContext, useState } from 'react'
import PropTypes from 'prop-types';
export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  
  const [imageSrc, setImageSrc] = useState('')

  const contextValue = {
    imageSrc,
    setImageSrc,
  }

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
}
SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};