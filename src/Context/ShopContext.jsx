// ShopContextProvider.js
import React, { createContext } from 'react';
import all_Product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const contextValue = { all_Product }; // Corrected variable name
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
