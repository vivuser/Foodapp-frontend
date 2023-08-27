import { useContext, useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard"
import { filterData } from "../Utils/Helper";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";
import Bhimmer from "./Bhimmer";
import { IMG_CDN_URL } from "./Constants";

const Body = () => {
const [allRestaurant, setAllRestaurant] =useState();
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const [searchInput, setSearchInput] = useState("");
const {user ,setUser } = useContext(UserContext)
const [filteredOffer, setFilteredOffer] = useState([]);
const [currentIndex, setCurrentIndex ] = useState(0);


useEffect(()=>{
    getRestaurant();
    },[])

useEffect(() =>{
    const data = filterData(searchInput, allRestaurant)
    setFilteredRestaurant(data);
}, [searchInput, allRestaurant])


async function getRestaurant(){
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6884695&lng=76.7260057&page_type=DESKTOP_WEB_LISTING");

const json = await data.json();
const restaurant_array = (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
const offerCards =  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
console.log(restaurant_array)
setAllRestaurant(restaurant_array);
setFilteredRestaurant(restaurant_array);
setFilteredOffer(offerCards)
}

const goToPrevious = () =>{
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredOffer.length) % filteredOffer.length)
}

const goToNext = () =>{
    console.log('press next')
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredOffer.length); 
};



    // const isOnline = useOnline();

    // if (!isOnline){
    //     return <h1>  Offline, Please check Internet connection</h1>
    // }


    // if (!allRestaurant) return null;

    // if (filteredRestaurant?.length === 0 && allRestaurant?.length !== 0) {return <h1>No restaurant matched your filter</h1>}

    return (!allRestaurant) ? <Bhimmer/>: (
         <>
        <div className="search-container p-5 bg-pink-50 my-5">
        <input type="text" className="search-input" placeholder="Search" value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
        />
        <button className='bg-yellow-300 rounded-lg pl-2 pr-2 m-2'
        onClick = {()=> {
        const data = filterData(searchInput, allRestaurant)
        console.log(allRestaurant)
        setFilteredRestaurant(data)
        } } > search
        </button>
        </div> 
        <div className="font-bold text-2xl pl-10">What's on your mind?</div>
        <div className="w-86 h-56 gap-5 flex flex-horizontal justify-center">
        {
            (!filteredOffer) ? <div className="font-bold text-2xl mt-10">No Active Offers</div> :
            filteredOffer.map((offer, index) =>
            <img src={IMG_CDN_URL + offer.imageId} key={offer.id} alt= {`Offer ${index}`} 
            className= {`w-56 h-56 ${index >= currentIndex && index < currentIndex + 4? "block" : "hidden"}`}
            />
            )
        }
            
        <button onClick={goToPrevious} className="carousel-button prev-button rounded-full flex items-center justify-center">&#10094;</button>
        <button onClick={goToNext} className="carousel-button next-button">&#10095;</button>
        
        </div>
        <div className="font-bold text-2xl pl-10 mt-10">Top restaurant chains in Chandigarh</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center pl-20 pr-20 mt-10">
        {
        filteredRestaurant.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
            <div className="flex flex-col items-center">
             <RestaurantCard {...restaurant.info} key={restaurant.info.id} user={user}/>
            </div>
             </Link>
        )})}
        </div>
        </>)
    
}


export default Body;