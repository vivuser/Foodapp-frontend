import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './Constants';
import Shimmer from './Shimmer';
import useRestaurant from '../Utils/useRestaurant';
import { addItem, removeItem } from '../Utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {

  const { resId } = useParams();

    const { restaurant, menuItems } = useRestaurant(resId);
  
  const dispatch = useDispatch()

  const [count,setCount] = useState({});
  const [decount, setDecount] = useState({});
  
  const handleCount=(itemId) =>{
    const updatedCount = {...count}
    updatedCount[itemId] = (updatedCount[itemId] || 0) + 1
    setCount(updatedCount)
   };

  const handleDecount= (itemId) =>{
    const updatedCount = {...count}
    updatedCount[itemId] = updatedCount[itemId] >0? (updatedCount[itemId] || 0) -1 : 0;
    setCount(updatedCount)
  }

  const handleAddItem = (item) => {
    dispatch(addItem({item}))
    handleCount(item.id);
  }

  const handleSubtractItem = (item) =>{
    if (count[item.id] > 0) {
    dispatch(removeItem({item}))
    }
    handleDecount(item.id)
  }

  const totalItems = Object.values(count).reduce((total, quantity) => total + quantity,0)
  console.log(count)
  console.log(menuItems)

  const filteredArray = Object.values(menuItems).filter(item => count[item.card.info.id] >0);
  console.log(filteredArray + '====>')  



  return !restaurant ? (
    <Shimmer /> 
  ) : (
    <div className='flex flex-wrap gap-4'>
            <p>Total Items: {totalItems}</p>
      {/* ... (restaurant info) */}
      {Object.values(menuItems).map((item, index) => (
        <div className='w-56 p-2 shadow-lg bg-pink-50' key={index}>
          <img src={IMG_CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
          <div className='font-semibold'>{item?.card?.info?.name}</div>
          <div>₹{item?.card?.info?.price / 100}</div>
          <div className='text-sm'>₹{item?.card?.info?.description}</div>
          <div className='flex space-x-2'>
            <button
              onClick={() => handleSubtractItem(item?.card?.info)}
              className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md'
            >
              -
            </button>
            <span className='px-2 py-1'>{count[item?.card?.info?.id] || 0}</span>
            <button
              onClick={() => handleAddItem(item?.card?.info)}
              className='bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md'
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
