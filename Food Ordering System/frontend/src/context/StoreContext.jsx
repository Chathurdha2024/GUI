import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracking login state
  const [pendingItem, setPendingItem] = useState(null); // Store pending item before login

  // Add item to cart
  const addToCart = (itemId) => {
    if (!isLoggedIn) {
      setPendingItem(itemId); // Store item to be added later if user is not logged in
      return; // Do not add to cart if user is not logged in
    }

    // Add to cart if user is logged in
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updatedCart[itemId] <= 0) delete updatedCart[itemId]; // Remove item if quantity is 0
      return updatedCart;
    });
  };

  // Get total amount of the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Handle login and logout
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  // Automatically add the pending item after user logs in
  useEffect(() => {
    if (isLoggedIn && pendingItem) {
      addToCart(pendingItem); // Add the pending item to the cart
      setPendingItem(null); // Clear the pending item
    }
  }, [isLoggedIn, pendingItem]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;