import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { filterData } from "../Utils/Helper";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";


const Body = () => {
const [allRestaurant, setAllRestaurant] =useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const [searchInput, setSearchInput] = useState("");

useEffect(()=>{
    getRestaurant();
    },[])

async function getRestaurant(){
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6884695&lng=76.7260057&page_type=DESKTOP_WEB_LISTING");

const json = await data.json();
setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
}
    const isOnline = useOnline();

    if (!isOnline){
        return <h1>  Offline, Please check Internet connection</h1>
    }


    if (!allRestaurant) return null;

    if (filteredRestaurant?.length === 0 && allRestaurant?.length !== 0) {return <h1>No restaurant matched your filter</h1>}

    return (allRestaurant?.length === 0 )?<Shimmer/>: (
         <>
        <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
        />
        <button className="search-btn" 
       
       
        onClick = {()=> {
        const data = filterData(searchInput, allRestaurant)
        setFilteredRestaurant(data)
        } } > search
        </button>
        </div>
        <div className="restaurant-list">
        {
        filteredRestaurant.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
             <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
             </Link>
        )}
        )}
        </div>
        </>)
    
}


export default Body;