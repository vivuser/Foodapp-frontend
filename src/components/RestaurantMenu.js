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
import Header from './Header';
import { useRestaurantInfo } from './restaurantContext';

const RestaurantMenu = () => {

  const { resId } = useParams();

    const { restaurant, menuItems, title, restaurantName, wholeData } = useRestaurant(resId);

    const { setRestaurantInfo } = useRestaurantInfo()

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()

  const [count,setCount] = useState({});
  const [searchMenu, setSearchMenu] = useState("")
  const [filteredMenu, setFilteredMenu] = useState([])
  const [isAdded, setIsAdded] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItem, setCartItem] = useState([])
  const [selectedItemId, setSelectedItemId] = useState(-1);

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

  const setIndex = (index) => {
    if (selectedItemId === index){
      setSelectedItemId(-1)
    }
    else{
    setSelectedItemId(index)
    }
  }


  const totality = cartItems.reduce((total, item) => total + item.item.price/100,0)

  useEffect(() =>{
    const data = filterMenu(searchMenu, menuItems)
    setFilteredMenu(data);
  },[searchMenu]);


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

useEffect(() => {
  const firstItemWithCategoriesIndex = all.findIndex((item) => item.categories && item.categories.length > 0);

  if (firstItemWithCategoriesIndex !== -1){
    setSelectedItemId(firstItemWithCategoriesIndex);
  }
}, [all[0]])


 
  
  return !restaurant ? (
    <Shimmer /> 
  ) : (<>
    <div className='gap-8'>
      <div > 
        <div className='flex m-4 justify-between max-w-xs justify-between mx-auto'>
      <div className='border border-solid border-gray-300 rounded-md'>
        <input className='ml-5 mr-2 pl-2 pt-1' style={{ outline: 'none' }} type='text' placeholder = {`Search in ${restaurant.name}`} value={searchMenu}
        onChange={(e)=> {setSearchMenu(e.target.value)}} />
        </div>
        <div>
        <MdSearch size={30} color="gray"
        onClick={()=>{
          const data = filterMenu(searchMenu, menuItems)
          console.log(data)
          setFilteredMenu(data)
        }}
        />
        </div>
        </div>
        <div className='flex flex-row mt-2 max-w-4xl mx-auto bg-orange-50 p-4'>
        <div className='pl-5'>
      <div className='font-bold pb-1 text-lg text-gray-700'>{restaurantName.name}</div>
      <div className='font-serif pt-1 pb-1'>{restaurantName.cuisines.join()}</div>
      <div className='font-serif pt-1'>{restaurantName.city}</div>
      </div>
        <div className='ml-auto pr-2 pl-2 border-2 border-solid bg-gray-100 border-gray-300 hover:bg-gray-200'>
        <div className='pl-1'><FontAwesomeIcon color='green' icon={faStar} /> {restaurantName.avgRating}</div>
        <hr className='border-t-1 m-1 border-gray-400'></hr>
        <div>{restaurantName.totalRatingsString}</div>
        <hr className='border-t-1 m-1 border-gray-400'></hr>
      <div className='font-bold'>{restaurantName.costForTwoMessage}</div>
        </div>
      </div>
      <div className='max-w-5xl justify-between mx-auto'>
      <hr className='border-dashed border-t-1 border-gray-300 m-10'></hr>
      {filteredMenu?.map((item, index) => {
         return (<>
                <div className='flex justify-between max-w-3xl mx-auto'>
                
                <div className='m-4'>
                <div key={index}>{item?.card?.info?.name}</div>
                <div key={index}>₹{item?.card?.info?.price/100}</div>
                <div key={index}>{item?.card?.info?.description}</div>

                </div>

                <div>
                <img className="w-28 h-28 ml-5" src ={IMG_CDN_URL + item?.card?.info?.imageId}></img>
                </div>

                </div>
                </>)
        })}
      </div>
    
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
    
  <div key={index} className='font-bold max-w-4xl mx-auto'>
  {filteredMenu.length ===0 && item?.categories ?
  <div>
  <hr className='border-t-8 bg-gray-200 h-4 max-w-1/2 m-4 border-gray-200'></hr>
  <div className='flex justify-between'>
  <div>
  <button id={index}
      className='font-bold h-10 bg-white ml-5 mr-11 p-2 relative select-none flex justify-between items-center' 
      onClick={() => setIndex(index)}> {item?.title}
      </button>
      </div>
      <div className='flex items-center justify-end pr-10 text-gray-600' style={{cursor: 'pointer'}}>{selectedItemId === index ? '▲' : '▼'}</div>
      </div>
      </div> : null}
    {selectedItemId === index && 
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
  </>);
};

export default RestaurantMenu;
