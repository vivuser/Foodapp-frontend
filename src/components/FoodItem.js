import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestaurant";
import { IMG_CDN_URL } from "./Constants"

const FoodItem =() =>{

    const { resId } = useParams;

    const { restaurant, menuItems } = useRestaurant(resId);

    return (
         <div className="card">
             <img className="img" alt="image" 
             src= {IMG_CDN_URL + restaurant.cloudinaryImageId} />
             <h2>{restaurant.name}</h2>
             <h5>{restaurant.cuisines}</h5>
             <h5>{restaurant.totalRatingsString}</h5>
         </div>
         )
 }

 export default FoodItem