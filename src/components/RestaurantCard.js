import { IMG_CDN_URL } from "./Constants"

export const RestaurantCard =({name, cuisines , cloudinaryImageId, totalRatingsString}) =>{

    return (
         <div className="card">
             <img className="img" alt="image" 
             src= {IMG_CDN_URL + cloudinaryImageId} />
             <h2>{name}</h2>
             <h5>{cuisines}</h5>
             <h5>{totalRatingsString}</h5>
         </div>
     )
 }