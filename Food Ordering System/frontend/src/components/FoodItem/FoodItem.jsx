import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import LoginPopup from "../LoginPopup/LoginPopup";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, isLoggedIn } = useContext(StoreContext);
  const [showLogin, setShowLogin] = useState(false); // State for showing login popup

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setShowLogin(true); // Show login popup if not logged in
    } else {
      addToCart(id); // Add item to cart if logged in
    }
  };

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={handleAddToCart}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add More" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>

      {/* Show login popup if not logged in */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </div>
  );
};

export default FoodItem;
