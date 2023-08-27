import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './Constants';
import Shimmer from './Shimmer';
import useRestaurant from '../Utils/useRestaurant';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../Utils/cartSlice.js';
import { filterMenu } from '../Utils/searchMenu';
import  veg  from '../Utils/vegImage.png'
import  nonVeg  from '../Utils/nonVeg.png'


const RestaurantMenu = () => {

  const { resId } = useParams();

    const { restaurant, menuItems } = useRestaurant(resId);
  
  const dispatch = useDispatch()

  const [count,setCount] = useState({});
  const [decount, setDecount] = useState({});
  const [searchMenu, setSearchMenu] = useState("")
  const [filteredMenu, setFilteredMenu] = useState([])
  const [sortOrder, setSortOrder] = useState('default')
  const [showVeg, setShowVeg] = useState(false)

  const handleVegToggle = () => {
    setShowVeg(!showVeg)
    const vegFilter = [...filteredMenu].filter(v => (showVeg ? v.card.info.isVeg : true))
    console.log(vegFilter)
    setFilteredMenu(vegFilter)
  } 

  const sortHighToLow = () =>{
    const sortedMenu =[...filteredMenu].sort((a,b)=> b.card.info.price - a.card.info.price)
    setFilteredMenu(sortedMenu);
    }

  const sortLowToHigh = () => {
    const sortedMenu = [...filteredMenu].sort((a,b) => a.card.info.price - b.card.info.price)
    setFilteredMenu(sortedMenu)
  }

  const sortDefault = () => {
    setFilteredMenu(filteredMenu)
  }

  const handleSortingChange = (event) =>{
    const selectedValue = event.target.value;
    setSortOrder(selectedValue)

    if (selectedValue === 'highToLow') 
      {
        sortHighToLow();
      }
      else if (selectedValue === 'lowToHigh')
      {
        sortLowToHigh();
      }
      else {
        sortDefault();
      }
  }


  useEffect(() =>{
    const data = filterMenu(searchMenu, menuItems)
    setFilteredMenu(data);
  },[searchMenu, menuItems]);


  const handleCount=(itemId) =>{
    const updatedCount = {...count}
    updatedCount[itemId] = (updatedCount[itemId] || 0) + 1
    setCount(updatedCount)
   };

  const handleDecount= (itemId) =>{
    const updatedCount = {...count}
    updatedCount[itemId] = updatedCount[itemId] >0? (updatedCount[itemId] || 0) -1 : 0;
    setCount(updatedCount)
  }

  const handleAddItem = (item) => {
    dispatch(addItem({item}))
    handleCount(item.id);
  }

  const handleSubtractItem = (item) =>{
    if (count[item.id] > 0) {
    dispatch(removeItem({item}))
    }
    handleDecount(item.id)
  }

  const totalItems = Object.values(count).reduce((total, quantity) => total + quantity,0)
  
  // console.log(filteredMenu)
  // console.log(menuItems)
  
  return !restaurant ? (
    <Shimmer /> 
  ) : (
    <div className='gap-8'>
      {/* ... (restaurant info) */}
      <div>
        <input className='ml-5 pl-2' type='text' placeholder='search menu' value={searchMenu}
        onChange={(e)=> {setSearchMenu(e.target.value)}} />
        <button className='bg-yellow-300 rounded-lg pl-2 pr-2 m-2'
        onClick={()=>{
          const data = filterMenu(searchMenu, menuItems)
          console.log(data)
          setFilteredMenu(data)
        }}
        >Search</button>
           <button   className={`ml-4 px-2 py-1 rounded-md ${
    showVeg ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
  }`} onClick={handleVegToggle}>
        show only veg
      </button>
        <div className='flex justify-end pr-6'>
        <select value={sortOrder} onChange={handleSortingChange}>
        <option value="highToLow">High To Low</option>
        <option value="lowToHigh">Low To High</option>
        <option value="default">Default Sort</option>
        </select>
        </div>
      </div>
      {Object.values(filteredMenu).map((item, index) => (<>
        <div className='flex flex-row justify-between p-2  mt-5 shadow-lg bg-white-20 pl-10 pr-10' key={index}>
        <div className='mb-2 flex flex-row'>
        <div>{item?.card?.info?.isVeg ? <img className ="w-5 h-5" src={veg} alt="Vegetarian Icon" />
 : <img className ="w-5 h-5" src={nonVeg} alt="nonVegetarian Icon" />}</div>
        <img className='w-36 h-29' src={IMG_CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
        <div className='flex flex-col pl-2'>
        <div className='font-semibold'>{item?.card?.info?.name}</div>
        ₹{item?.card?.info?.price / 100}
        <div className='text-sm justify-center'>{item?.card?.info?.description}</div>

        </div>
        </div>
          <div className='flex justify-end space-x-2 h-8'>
            <button
              onClick={() => handleSubtractItem(item?.card?.info)}
              className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md ml-auto'
            >
              -
            </button>
            <span className='px-2 py-1'>{count[item?.card?.info?.id] || 0}</span>
            <button
              onClick={() => handleAddItem(item?.card?.info)}
              className='bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md'
            >
              +
            </button>
          </div>
        </div>
      </>))}
    </div>
  );
};

export default RestaurantMenu;
