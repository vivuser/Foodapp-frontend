import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "./Constants";
import React from "react";
import axios from "axios";
import { decrementItem , addItem, removeItem, clearCart} from "../Utils/cartSlice.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {


  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    console.log(itemId)
    dispatch(removeItem(itemId));
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

const handleDecrementQuantity = (item) => {
  console.log(item);
  dispatch(decrementItem(item));
};



const handleIncrementQuantity = (itemId) => {
  console.log(itemId)
  const itemToUpdate = cartItems.find(item => item.item.id === itemId);
  if (itemToUpdate) { 
  console.log(dispatch(addItem(itemToUpdate)));
  }
};

const cartInfo = {
  "userId": "5f63f16f50c982001c268ac7",
  "products": [
    {
      "productId": "5f63f16f50c982001c268ac8",
      "quantity": 2
    }
  ],
  "totalPrice": 255
}


const handleSubmitInfo = async(e) =>{
  e.preventDefault();
  try{
    const placeOrder = await axios.post("http://localhost:8080/submitCart",{...cartInfo},
    {
      headers:{
        Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
      }
    })
  }
  catch(error) {
    console.log('Error:', error);
  }
  }


return (<>
<div >
  <div className="flex bg-gray-100 justify-center">
  <div className="w-1/2 bg-gray-100">
  <div className="bg-white h-56 m-10">
      <div className="flex justify-between">
      <div className="font-bold m-5 mb-3 pl-6">Account</div>
  </div>
     <div className="flex"> 
     <div className="w-1/2">
    <div className="text-gray-600 pl-9">To place your order now, log in to your existing account or sign up.</div>
    <div className="flex pb-2 pt-8">
    <div className="text-center p-2 ml-8 mt-2 w-40 text-sm border border-solid border-green-500 text-green-600 font-bold">Have an Account?<br/>LOGIN</div>
    <div className="p-2 text-center font-semibold text-sm ml-8 mt-2 w-40 bg-green-600 text-white border border-solid border-green-500">New to Foodvilla?<br/>SIGN UP</div>
   </div>
   </div>
   <div className="w-1/2 flex justify-center items-center">
   <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r" />
   </div>
   
   </div>
    </div>

  </div>
  
    <div className="p-4 bg-white m-10">
          <button
            onClick={handleClearCart}
            className="bg-white hover:bg-red-100 text-red-500 px-4 py-2 rounded-md"
          >
            Clear Cart
          </button>
      {Object.values(summarizedCart).length > 0 ? (<>
        <div className="flex justify-end space">
      
          <div className="grid mt-4 bg-white">
            {Object.values(summarizedCart).map((cartItem, index) => (
              <div key={index} className="items-center justify-between p-4">
                <div className="flex items-center justify-between">
                <div className="">
                  </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 text-sm font-serif">
                  {cartItem.item.name}  
                  </div>
                  <div className="bg-border border border-solid border-gray-300 pl-3 pr-3">
                  <button
                  onClick={() => handleDecrementQuantity(cartItem)}
                  className=""
                  >-</button>
                  <span className="text-md">{cartItem.quantity}</span>
                  <button   
                  onClick={() => handleIncrementQuantity(cartItem.item.id)}
                  className=""
                  >+</button>
                  </div>
                  <div className="text-md font-arial"> 
                  ₹ {cartItem.item.price/100 * cartItem.quantity}
                  </div>
                  <button
                    onClick={() => handleRemoveItem(cartItem.item.id)}
                    className="text-red-500 hover:text-black-600 text-sm bg-white border border-solid border-gray-100 rounded-md p-1 hover:bg-red-300"
                  >
                     <FontAwesomeIcon icon={faTrash} />
                  </button>
                  </div>
                </div>            
            ))}
          </div>
        </div>
        <hr className="p-2 text-gray-700"></hr>
        <div className="flex justify-between">
        <div className="pt-1 font-bold">To Pay</div>
        <div className="text-md bg-brown-100 text-right pr-5 font-arial">
         ₹ {Object.values(summarizedCart).reduce((total,cartItem)=>{
            return total + (cartItem.item.price)/100 *(cartItem.quantity);
          }, 0)}
        </div>
        </div>
        <div className="flex justify-end">
        <button className="bg-green-300 font-bold m-5 p-3 rounded-md hover:bg-green-600"
        onClick={handleSubmitInfo}
        >Checkout</button>
          </div>
     </> ) : (
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Your cart is empty</p>
          <Link to="/" className="text-blue-500 hover:underline">
            Shop Now
          </Link>
        </div>
      )}
      </div>
      </div>
      </div>
</>)};

export default Cart;
