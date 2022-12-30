import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
//   const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Rs.{price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItems[id] > 0 && <>({cartItems[id]})</>}
      </button>
    </div>
  );
};

export default Product;
