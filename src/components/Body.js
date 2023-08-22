import { useContext, useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { filterData } from "../Utils/Helper";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";

const Body = () => {
const [allRestaurant, setAllRestaurant] =useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const [searchInput, setSearchInput] = useState("");
const {user ,setUser } = useContext(UserContext)

useEffect(()=>{
    getRestaurant();
    },[])

async function getRestaurant(){
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6884695&lng=76.7260057&page_type=DESKTOP_WEB_LISTING");

const json = await data.json();

// setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
// setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
const restaurant_array = (json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
console.log(restaurant_array)
setAllRestaurant(restaurant_array)
setFilteredRestaurant(restaurant_array);
}
    const isOnline = useOnline();

    if (!isOnline){
        return <h1>  Offline, Please check Internet connection</h1>
    }


    if (!allRestaurant) return null;

    if (filteredRestaurant?.length === 0 && allRestaurant?.length !== 0) {return <h1>No restaurant matched your filter</h1>}

    return (allRestaurant?.length === 0 )?<Shimmer/>: (
         <>
        <div className="search-container p-5 bg-pink-50 my-5">
        <input type="text" className="search-input" placeholder="Search" value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
        />
        <button className="p-2 m-2 bg-purple-900 text-white rounded-md" 
       
       
        onClick = {()=> {
        const data = filterData(searchInput, allRestaurant)
        console.log(allRestaurant)
        setFilteredRestaurant(data)
        } } > search
        </button>
        <input value={user.name} onChange={(e)=>setUser({
            name: e.target.value,
            email: "newemail@gmail.com"
        })}></input>
        </div>
        <div className="flex flex-wrap">
        {
        filteredRestaurant.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
             <RestaurantCard {...restaurant.info} key={restaurant.info.id} user={user}/>
             </Link>
        )})}
        </div>
        </>)
    
}


export default Body;