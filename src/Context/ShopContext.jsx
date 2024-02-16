// ShopContextProvider.js
import React, { createContext, useState } from 'react';
import all_Product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefultCart =()=>{
  let cart = {};
  for(let index = 0 ; index < all_Product.length+1; index++){
    cart[index]=0;
  }
return cart;

}

export const ShopContextProvider = (props) => {

  const [cartItems,setCartItems] = useState(getDefultCart);

 const addToCart =(itemId ) =>{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  console.log(cartItems);
 }

 const removeFromCart =(itemId ) =>{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 }

 const getTotalCartAmount = () => {
  let totalAmount = 0;
  for(const item in cartItems){
    if(cartItems[item] > 0 ){

      let itemInfo = all_Product.find((product)=>product.id === Number(item))

      totalAmount += itemInfo.new_price * cartItems[item];
    }

    
  }
  return totalAmount;

 }

 const getTotalCartItems = () => {
  let totalItem = 0;
  for(const item in cartItems){
    if(cartItems[item] > 0 ){


      totalItem += cartItems[item];
    }

    
  }
  return totalItem;

 }

 const contextValue = {getTotalCartItems, getTotalCartAmount, all_Product, cartItems ,addToCart, removeFromCart}; // Corrected variable name

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
