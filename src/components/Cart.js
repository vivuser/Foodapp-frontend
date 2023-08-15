import { useDispatch, useSelector } from "react-redux"
import { clearCart, removeItem } from "../Utils/cartSlice";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "./Constants";

const Cart = () => {

  const handleClearCart = ()=>{
    console.log('clearcart')
    dispatch(clearCart())
  }
  const handleRemoveItem = () =>{
    console.log('removeItem')
    dispatch(removeItem())
  }

  const dispatch = useDispatch();
  dispatch(removeItem)

const cartItems = useSelector((store) => store.cart.items)    

console.log(cartItems);

return (
  <>
    {cartItems.length > 0 ? (
      <>
        <button onClick={handleClearCart}>Clear Cart</button>
        <div className="restaurant-list">
        {cartItems.map((cartItem, index) => (
          <div key={index} className="card">
            {cartItem.item.name}{" "}
            <img src={IMG_CDN_URL+cartItem.item.imageId}/>
            <button onClick={() => handleRemoveItem()}>Remove</button>
          </div>
        ))}</div>
      </>
    ) : (
      <>
        <p>Your cart is empty</p>
        <Link to='/'>
        <button >Shop Now</button>
        </Link>
        
      </>
    )}
  </>
);
};

export default Cart;


