import { useContext } from "react"
import { IMG_CDN_URL } from "./Constants"
import UserContext from "../Utils/UserContext"

export const RestaurantCard =({name, cuisines , cloudinaryImageId, totalRatingsString}) =>{

    const { user } = useContext(UserContext)
    return (
         <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
             <img className="img" alt="image" 
             src= {IMG_CDN_URL + cloudinaryImageId} />
             <h2 className="font-bold text-xl">{name}</h2>
             <h6>{cuisines}</h6>
             <h5>{totalRatingsString}</h5>
             {/* <h6>{user.name}</h6>
             <h6>{user.email}</h6> */}
         </div>
     )
 }