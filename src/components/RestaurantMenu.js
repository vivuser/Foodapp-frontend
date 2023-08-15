import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './Constants';
import Shimmer from './Shimmer';
import useRestaurant from '../Utils/useRestaurant';
import { addItem, removeItem } from '../Utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  console.log('Component is rendering'); // Add this line

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
    updatedCount[itemId] = (updatedCount[itemId] || 0) -1
    setDecount(updatedCount)
  }

  const handleAddItem = (item) => {
    dispatch(addItem({item}))
    handleCount(item.id);
  }

  const handleSubtractItem = (item) =>{
    dispatch(removeItem({item}))
    handleDecount(item.id)
  }

  return !restaurant ? (
    <Shimmer/> 
  ) : (
    <div className='flex flex-wrap gap-4'>
      <div className='w-56 p-2 shadow-lg bg-pink-50'>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant.name}</h2>
        <img className="img-single" alt="image" 
        src= {IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.locality}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRatingString}</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
        <h1>Menu</h1>
      </div>
      {Object.values(menuItems).map((item, index) => (
        <div className='w-56 p-2 shadow-lg bg-pink-50' key={index}>
          <img src={IMG_CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
          <div>{item?.card?.info?.name}</div>
          <div>₹{item?.card?.info?.price / 100}</div>
          <div>
            <button onClick={() => handleAddItem(item?.card?.info)}> + {count[item?.card?.info?.id] || 0}</button> 
            <button onClick={() => handleSubtractItem(item?.card?.info)}> - {decount[item?.card?.info?.id] || 0}</button> 
          </div>
        </div>
      ))}
    </div>
  );
  

};

export default RestaurantMenu;
