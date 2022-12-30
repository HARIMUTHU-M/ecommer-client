import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[PRODUCTS[i].id] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  //1)
  const [cartItems, setCartItems] = useState(getDefaultCart());
  //   { itemId: frequency }
  //   IntialState { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0 }

  //2)
  const addToCart = (itemId) => {
    setCartItems((previousCart) => ({
      ...previousCart,
      [itemId]: previousCart[itemId] + 1,
    }));
    // console.log(cartItems)
  };

  // 3)
  const removeFromCart = (itemId) => {
    setCartItems((previousCart) => ({
      ...previousCart,
      [itemId]: previousCart[itemId] - 1,
    }));
  };

  // 4)
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // 5)
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === item);
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
