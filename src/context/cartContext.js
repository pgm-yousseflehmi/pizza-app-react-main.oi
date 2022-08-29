import React, { useState, createContext, useEffect } from "react";
import { Navigate } from "react-router";
import { pizzaProducts } from "../fakeData/pizzas";
import ordering from "../pizzaordering/ordering";

const CartContext = createContext();

const CartProvider = ({ children }) => {
 
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (id, quantity, selectedPizzaSize) => {
    let newPizzaArray = ordering.addPizzaToCart(id, quantity, selectedPizzaSize, cartItems, pizzaProducts);
    setCartItems(newPizzaArray);
  };

  const removeFromCart = (id, selectedPizzaSize) => {
    let newPizzaArray = ordering.removePizzaFromCart(id, selectedPizzaSize, cartItems);
    setCartItems(newPizzaArray);
  };

  const emptyCart = () => {
    setCartItems([])
  }

  const value = { pizzaProducts, cartItems, addToCart, removeFromCart, emptyCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };