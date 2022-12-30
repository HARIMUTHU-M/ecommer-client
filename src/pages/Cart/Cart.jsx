import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import CartItem from "./cart-item";
import Axios from "axios";
import "./cart.css";
// import * as env from 'dotenv'
// require('dotenv').config()

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  const checkout = async () => {
    const baseUrl = process.env.REACT_APP_URL || "http://localhost:3001";
    Axios.post(baseUrl + "/checkout", { items: cartItems }).then((res) => {
      if (res.data.url) {
        window.location.assign(res.data.url);
      }
    });
  };

  return getTotalCartAmount() === 0 ? (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your Cart is Empty</h1>
      </div>
    </div>
  ) : (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your Cart</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product, idx) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={idx} data={product} />;
          }
          return <div key={idx}></div>;
        })}
      </div>
      <div className="checkout">
        <p>SubTotal: Rs.{getTotalCartAmount()}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button onClick={checkout}>Check-Out</button>
        {/* () => console.log(cartItems) */}
      </div>
    </div>
  );
};

export default Cart;
