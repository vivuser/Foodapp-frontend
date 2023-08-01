import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './Constants';
import Shimmer from './Shimmer';
import useRestaurant from '../Utils/useRestaurant';

const RestaurantMenu = () => {
  console.log('Component is rendering'); // Add this line

  const { resId } = useParams();

    const { restaurant, menuItems } = useRestaurant(resId);
  


  return !restaurant ? (
  <Shimmer/> 
  ) : (
    <div className='menu-items'>
      <h1>Restaurant id: {resId}</h1>
      <h2>{restaurant.name}</h2>
      <img className="img-single" alt="image" 
      src= {IMG_CDN_URL+ restaurant.cloudinaryImageId} />
      <h3>{restaurant.locality}</h3>
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.avgRatingString}</h3>
      <h3>{restaurant.costForTwoMessage}</h3>
      {Object.values(menuItems).map((item,index)=>(
          <li key={index}>{item?.card?.info?.name}</li>
       
      ))}
      </div>
  );
};

export default RestaurantMenu;
