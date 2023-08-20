import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "./Constants";
import React from "react";
import { decrementItem , addItem, removeItem, clearCart} from "../Utils/cartSlice.js";

const Cart = () => {


  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };



console.log(cartItems)
const summarizedCart = {}

cartItems.forEach(element => {
if (!summarizedCart[element.item.id]){
    summarizedCart[element.item.id] =  {...element, quantity :1}; 
} else {
    summarizedCart[element.item.id].quantity +=1;
}});

console.log(Object.values(summarizedCart))

// const handleDecrementQuantity = (itemId) => {
//   console.log(itemId)
//   const itemToUpdate = cartItems.find(item => item.item.id === itemId);
//   if (itemToUpdate) {
//     console.log(dispatch(decrementItem(itemToUpdate.item.id)));
//   }
// };

const handleDecrementQuantity = (itemId) => {
  dispatch(decrementItem(itemId));
};


const handleIncrementQuantity = (itemId) => {
  console.log(itemId)
  const itemToUpdate = cartItems.find(item => item.item.id === itemId);
  if (itemToUpdate) { 
  console.log(dispatch(addItem(itemToUpdate)));
  }
};

return (
    <div className="p-4">
      {Object.values(summarizedCart).length > 0 ? (<>
        <div>
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Clear Cart
          </button>
          <div className="grid gap-4 mt-4">
            {Object.values(summarizedCart).map((cartItem, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-md flex items-center justify-between">
                <div className="flex items-center space-x-4 gap-14">
                <img
                  src={IMG_CDN_URL + cartItem.item.imageId}
                  alt={cartItem.item.name}
                  className="mt-2 w-20 h-20 object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">
                    {cartItem.item.name}  
                    <div>
                    <div className="mt-2">
                    ₹ {cartItem.item.price/100} 
                    </div>
                    </div>
                  </span>
                  </div>
                  </div>
                  <button
                  onClick={() => handleDecrementQuantity(cartItem.item.id)}
                  className="text-yellow-700 border border-yellow-700 rounded-full p-1"
                  >-</button>
                  <span className="text-lg">{cartItem.quantity}</span>
                  <button 
                  onClick={() => handleIncrementQuantity(cartItem.item.id)}
                  className="text-yellow-700 border border-yellow-700 rounded-full p-1"
                  >+</button>
                  <div> 
                  Total : ₹ {cartItem.item.price/100 * cartItem.quantity}
                  </div>
                  <button
                    onClick={() => handleRemoveItem()}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>            
            ))}
          </div>
        </div>
        <div className="text-xl bg-brown-100 text-right">
          Total: ₹ {Object.values(summarizedCart).reduce((total,cartItem)=>{
            return total + (cartItem.item.price)/100 *(cartItem.quantity);
          }, 0)}
        </div>
        <button className="text-xl bg-brown-700 px-4 py-2 rounded-md">Checkout</button>
     </> ) : (
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Your cart is empty</p>
          <Link to="/" className="text-blue-500 hover:underline">
            Shop Now
          </Link>
        </div>
      )}
      </div>
)};

export default Cart;
