import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  // Handle Proceed to Checkout
  const handleCheckout = async () => {
    const userId = 1; // Replace with dynamic user ID (e.g., from context, localStorage)

    // Prepare the cart items in the correct format
    const cartData = Object.entries(cartItems).map(([foodId, quantity]) => {
      const food = food_list.find((item) => item._id === foodId);
      return {
        food_id: foodId,
        quantity,
        total_price: food.price * quantity,
      };
    });

    if (cartData.length === 0) {
      alert("Your cart is empty. Please add items to proceed.");
      return;
    }

    console.log("Sending cart data:", cartData); // Debugging line

    try {
      const response = await fetch("http://localhost:5000/api/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, cartItems: cartData }),
      });

      const data = await response.json();
      console.log("Server Response:", data); // Debugging line

      if (response.ok) {
        alert("Cart items added to the database!");
        navigate("/checkout"); // Redirect to checkout page
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error adding cart to database:", error);
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
