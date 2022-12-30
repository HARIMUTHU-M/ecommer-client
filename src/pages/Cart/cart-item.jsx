import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Rs.{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
