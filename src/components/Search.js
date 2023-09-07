import React, { useEffect, useState } from 'react'
import { filterData } from '../Utils/Helper'
import { RestaurantCard } from './RestaurantCard'
import { IMG_CDN_URL } from './Constants'
import { filterMenu } from '../Utils/searchMenu'

const Search = () => {

    const[search, setSearch] = useState("")
    const [allRestaurant, setAllRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [cuisineData, setCuisineData] = useState([])
    const [userStartTyping, setUserStartTyping] = useState(false)
    
    useEffect(()=>{
        async function fetchData(){
            const { restaurantData, menuArray }  = await fetchRestaurantData()
            console.log(restaurantData)
            setAllRestaurant(restaurantData)
              setCuisineData(menuArray)  

        }
        fetchData();
        },[])

        async function fetchRestaurantData() {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6884695&lng=76.7260057&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            const restaurantData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            const menuArray = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
            return { restaurantData, menuArray }
          }


          
    const handleChange= (e)=>{
      setSearch(e.target.value)
    setUserStartTyping(true)
    }

    useEffect(() => {
      if (!search) return setFilteredRestaurant([])
        let timeoutId;
        const debounceFunction = () =>{
        console.log(allRestaurant)
        if (userStartTyping) {
        const filter = filterData(search, allRestaurant)
        const filterCuisine = filterMenu(search, cuisineData)
        console.log("filter",filter)
        console.log(filter)
        console.log(filterCuisine)
        setFilteredRestaurant(filter)
        setUserStartTyping(false)
        }

        };

        // if (search) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(debounceFunction, 2000);
        // }

        return () => {
            clearTimeout(timeoutId);
        }
    },[search]);

    
  

  return (<>
    <div className='flex justify-center items-center h-full'>
      <input type='input' placeholder='what are you looking upto?'
        className='w-full h-10 pl-5 ml-80 mr-80 mt-10 text-center border-b-2 border-gray-600 rounded-lg focus:border-gray-800 outline-none'
      onChange={handleChange}

      />
    </div>
    <div>
        <h2 className='font-serif text-xl ml-10 mt-5 text-center'>Popular Cuisines</h2>
    </div>

           {filteredRestaurant?.length  ?   filteredRestaurant?.map((restaurant) => (
                <div className='flex justify-center gap-4'>
            <img className='w-20 h-20 ' src = {IMG_CDN_URL + restaurant.info.cloudinaryImageId} alt={restaurant.infoid} />
            <p>{restaurant.info.name}</p>
            <p className='font-thin'>Restaurant</p>
            
            </div>

            ))  :  <div className='flex'> 
                {cuisineData?.map((restaurant) => (
                <div className='flex justify-center flex-col'>
            <img className='w-20 h-20 mb-40' src = {IMG_CDN_URL + restaurant.imageId} alt={restaurant.id} />            
            </div>
            ))}
            </div>
       
           }
           </>)


          }

export default Search