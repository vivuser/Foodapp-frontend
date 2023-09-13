import { useContext } from "react"
import { IMG_CDN_URL } from "./Constants"
import UserContext from "../Utils/UserContext"

export const RestaurantCard =({name, cuisines , cloudinaryImageId, totalRatingsString}) =>{

    console.log(name.length)
    console.log(cuisines.join().slice(0,15))


    const { user } = useContext(UserContext)
    return (
         <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 justify-between rounded-lg hover:translate-x-2 transition-transform  ">
             <img className="w-56 h-40 object-cover rounded-lg" alt="image" 
             src= {IMG_CDN_URL + cloudinaryImageId} />
            <div className="flex flex-col h-full justify-between">
            <div>
             <h2 className="font-sans font-semibold text-lg pb-2">{name.length > 17 ? `${name.slice(0,17)}...`: name}</h2>
             <h6 className="text-sm text-gray-800">{cuisines.join().length > 25 ? `${cuisines.join().slice(0,25)}...`: cuisines}</h6>
             <h5 className="font-serif text-sm text-gray-800">Total Ratings: {totalRatingsString}</h5>
            </div>
         </div>
         </div>
     )
 }