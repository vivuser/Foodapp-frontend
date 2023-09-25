import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './Constants';
import Shimmer from './Shimmer';
import useRestaurant from '../Utils/useRestaurant';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrementItem, removeItem } from '../Utils/cartSlice.js';
import { filterMenu } from '../Utils/searchMenu';
import  veg  from '../Utils/vegImage.png'
import  nonVeg  from '../Utils/nonVeg.png'
import { MdSearch } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

const RestaurantMenu = () => {

  const { resId } = useParams();

    const { restaurant, menuItems, title, restaurantName, wholeData } = useRestaurant(resId);
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()

  const [count,setCount] = useState({});
  const [decount, setDecount] = useState({});
  const [searchMenu, setSearchMenu] = useState("")
  const [filteredMenu, setFilteredMenu] = useState([])
  const [sortOrder, setSortOrder] = useState('default')
  const [showVeg, setShowVeg] = useState(false)
  const [category, setCategory] = useState([])
  const [show, setShow] = useState(false)
  const [isAdded, setIsAdded] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItem, setCartItem] = useState([])
  const [selectedItemId, setSelectedItemId] = useState(null);



  const openModal = () => {
    setIsModalOpen(true)
  };


  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch({type:'SET_CART', payload: savedCart});

    const initialCount = savedCart.reduce((countObj, cartItem) => {
      const itemId = cartItem?.item?.id;
      if (itemId !== undefined) {
        countObj[itemId] = (countObj[itemId] || 0) + 1;
      }
      return countObj;
    }, {})
    setCount(initialCount);
  },[])

  const changeShowState = (id) =>{
    setShow((prevShow) => !prevShow);
    setSelectedItemId(id);
  }

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

    const totality = cartItems.reduce((total, item) => total + item.item.price/100,0)

  useEffect(() =>{
    const data = filterMenu(searchMenu, menuItems)
    setFilteredMenu(data);
    setCategory(title)
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

    const updatedCart = [...cartItems, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const handleAddToCart = (item) => {
    const updatedIsAdded = {...isAdded};
    updatedIsAdded[item.id] = true;
    console.log(item)
    setIsAdded(updatedIsAdded)
    openModal()
    const updatedCartItems = [...cartItem, item]
    setCartItem(updatedCartItems)
    dispatch(addItem({item}))
  }

  const handleSubtractItem = (item) =>{
    if (count[item.id] > 0) {
    dispatch(decrementItem ({item}))
    }
    handleDecount(item.id)
  }

  const totalItems = Object.values(count).reduce((total, quantity) => total + quantity,0)
  console.log(filteredMenu)


  const boilerCart = [] 
    
  {if(wholeData) {
  wholeData.map((item) => (
        boilerCart.push(item.card.card
  ))
  )}}
  console.log(wholeData)
  console.log(boilerCart)
  
  const all = []
  boilerCart.map(item => {
      all.push(item)
  })
console.log(all)

const every = []
all.map(item => {
    every.push(item.itemCards)
})
console.log(every)

const allEvery =[]
every.map(item =>{
    (item?.map((item) => {
      allEvery.push(item?.card?.info?.name)
    }))})

console.log(allEvery)

console.log(cartItems, "kkkkkkkkkkkkkkkkkkkkkkk")
 
  
  return !restaurant ? (
    <Shimmer /> 
  ) : (
    <div className='gap-8'>
      {/* ... (restaurant info) */}
      <div>
        <input className='ml-5 pl-2' type='text' placeholder='search menu' value={searchMenu}
        onChange={(e)=> {setSearchMenu(e.target.value)}} />
        <MdSearch size={30} color="gray"
        onClick={()=>{
          const data = filterMenu(searchMenu, menuItems)
          console.log(data)
          setFilteredMenu(data)
        }}
        />
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
        <div className='flex flex-row mt-2 max-w-5xl mx-auto'>
        <div className='pl-10'>
      <div className='font-bold'>{restaurantName.name}</div>
      <div className='font-serif'>{restaurantName.cuisines.join()}</div>
      <div className='font-serif'>{restaurantName.city}</div>
      </div>
        <div className='ml-auto pr-10'>
        <div>{restaurantName.avgRating}<FontAwesomeIcon color='gray' icon={faStar} /></div>
        <div>{restaurantName.totalRatingsString}</div>
      <div className='font-bold'>{restaurantName.costForTwoMessage}</div>
        </div>
      </div>
      <hr className='border-dashed border-gray-400 m-10 pl-20'></hr>
      </div>

    

      {
    isModalOpen && 
    (
      <div className="fixed inset-0 flex items-end justify-center z-50 pointer-events-none">
        <div className="modal h-10 w-1/2 absolute bottom-0 bg-green-500 transform translate-y-0 transition-transform ease-in-out duration-300">
          <div className="p-2 text-white flex justify-between pointer-events-auto">
          <p className='pt-1 font-bold'>{cartItems.length} Items | ₹{totality}</p>
            <Link to="/cart">
            <div className='flex'>
            <h2 className="text-lg font-arial font-bold mb-4 pl-3 pr-3 pt-0.5 text-right">View Cart</h2>
            <FontAwesomeIcon icon={faShoppingBag} size="2x" />
            </div>
            </Link>
          </div>
        </div>
      </div>
    )    
  }


      {!all ? (
    <Shimmer />
  ) : (
    all.map((item, index) => (
  <div key={index} className='font-bold max-w-5xl mx-auto'>
  {item?.categories ?
  <button id={index}
      className='font-bold text-left h-10 bg-gray-200 ml-14 mr-11 mt-5 p-2 relative select-none flex space-between gap-10' 
      onClick={() => changeShowState(index)}>{item?.title}
          <div className=''>{show && selectedItemId === index ? '▲' : '▼'}</div>
      </button> : null} 
    {show && selectedItemId === index &&
      item?.categories?.map((subItem, subIndex) => (
      subItem?.itemCards?.map((tubItem, tubIndex) => (<>
        {tubItem?.card?.info?.imageId ?
        <div key={tubIndex}>
        <div className='relative flex flex-row justify-between p-7 tubItem max-w-5xl mx-auto'>
        <div className='flex flex-col'>
        <div key={tubIndex} className='font-medium'>{tubItem?.card?.info?.name}</div>
        {tubItem?.card?.info?.price ? 
          <div key={tubIndex} className='font-medium'>₹{tubItem?.card?.info?.price/100}</div>:
        <div key={tubIndex} className='font-medium'>₹{tubItem?.card?.info?.variantsV2.pricingModels[0].price/100}</div>
        }
        <div key={tubIndex} className='font-thin font-serif text-sm text-gray-600'>{tubItem?.card?.info?.description}</div>
        </div>

        <div key={tubIndex} className='absolute bottom-5 right-10'>
        {isAdded[tubItem.card.info.id] ? (
          <div>
          <button className='text-green-600 pl-4 pr-2 border rounded-1-md h-8 justify-end bg-white text-md'
          onClick={() => handleSubtractItem(tubItem.card.info)}
          >
          -
          </button>
          <span className='border-t border-b bg-white p-1 text-md text-green-600' >
            {count[tubItem.card.info.id] || 1}
          </span>
          <button 
          className='text-green-600 pl-4 pr-2 border rounded-1-md h-8 justify-end bg-white text-md'
          onClick={() => handleAddItem(tubItem.card.info)}
          >+
          </button>
          </div>
        ) : (
          <button 
          className='text-green-600 pl-4 pr-6 mr-2 p-2 border rounded-md h-10 justify-end bg-white text-xs'
          onClick={() => handleAddToCart(tubItem.card.info)}
          >ADD</button>
        )
        }
         </div>
        <img className="w-28 h-28 ml-5" src ={IMG_CDN_URL + tubItem?.card?.info?.imageId}></img>
        </div>
        <hr className='border-t-2 max-w-1/2 border-gray-200'></hr>
        </div>
         : null
        }
      </>))))}
  </div>)))}

    </div>
  );
};

export default RestaurantMenu;
