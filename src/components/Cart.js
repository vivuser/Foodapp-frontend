import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Utils/cartSlice";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "./Constants";

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

  return (
    <div className="p-4">
      {cartItems.length > 0 ? (
        <div>
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Clear Cart
          </button>
          <div className="grid gap-4 mt-4">
            {cartItems.map((cartItem, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-md">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    {cartItem.item.name}
                  </span>
                  <button
                    onClick={() => handleRemoveItem()}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
                <img
                  src={IMG_CDN_URL + cartItem.item.imageId}
                  alt={cartItem.item.name}
                  className="mt-2 w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Your cart is empty</p>
          <Link to="/" className="text-blue-500 hover:underline">
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
