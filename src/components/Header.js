import { useState, useContext } from "react";
import Logo from '../assets/foodvilla.png' 
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import '../App.css'
import { MdSearch } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import SideDrawer from "./SideDrawer";
import { useUser } from "./userContext";
import { useRestaurantInfo } from "./restaurantContext";


const Title = () => (
    <a href="/">
    <img className="h-24" 
    alt ="logo"
    src= {Logo} />
    </a>
);

const Header = () => {
    const { user } = useUser();
    const [title, setTitle] = useState("Food Villa");
    const [login, setLogin] = useState(false);
    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
    const [isCartHovered, setIsCartHovered] = useState(false);
    const { restaurantInfo }  = useRestaurantInfo();


    console.log(restaurantInfo,  '65464877945646546554679876513246549794')

    const handleMouseEnter = () => {
        setIsCartHovered(true)
    }

    const handleMouseLeave = () => {
        setIsCartHovered(false)
    }

    const openSideDrawer = (e) => {
        e.preventDefault()
        setIsSideDrawerOpen(true);
    }

    const closeSideDrawer = () => {
        setIsSideDrawerOpen(false)
    }



    const cartItems = useSelector(store => store.cart.items)
    // console.log(cartItems)

    const changeState= () => {
        setLogin(!login);
    }



    console.log(cartItems, 'gjhgdjsghfhgshdfhghgshdgfhsdgfhsgdhfgsj')


    return (<>
    

    <div className="flex justify-between bg-pink-50 shadow-lg">
    <Title />

        <h1 className="text-4xl mt-8 font-serif-bold"></h1>

      

        <div className="nav-items">
            <ul className="flex py-4 mt-3 gap-3">
                <Link to='/search'>
                <MdSearch size={24} color="black" />
                </Link>
                <Link to='/'>
                <li className="px-2 text-lg font-serif">Home</li>
                </Link>
                <Link to="/about"> 
                <li className="px-2 text-lg font-serif">About</li>
                </Link>
                <Link to="/contact">
                <li className="px-2 text-lg font-serif">Contact</li>
                </Link>
                <Link to="/instamart">
                <li className="px-2 text-lg font-serif">Instamart</li>
                </Link>
                <Link to="/cart">
                <FontAwesomeIcon
                icon={faShoppingCart}
                className="ml-1 text-2xl text-gray-600" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                <span className="text-red-500">{cartItems.length}</span>
                </Link>
                <SideDrawer isOpen={isSideDrawerOpen} onClose={closeSideDrawer} />
                <Link onClick={openSideDrawer}>
                {user ?
                 <div className="bg-white border text-lg text-green-700 border border-gray-400 hover:bg-green-100 rounded-full w-8 h-8 ml-2 mr-2 font-bold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',margin: '-4px 8px 0 0' }}>{user.email.charAt(0).toUpperCase()}</div>  :
                        <FontAwesomeIcon
                            icon={faUser} // Use the user icon here
                            className="ml-1 mr-4 text-2xl text-gray-600"
                        />}
                    </Link>
                <Link to='/account'>
                    <li>
                    Account
                    </li>
                </Link>
            </ul>
        </div>
    </div>
    {isCartHovered && cartItems.length>0 ?
        (<div className="flex justify-end">
        <div className="w-10 h-10 bg-white transform rotate-45 absolute z-50" style={{margin: '-22px 56px 12px 4px' }}></div>
        <div className="w-60 h-80 bg-white absolute z-50 items-end mr-8" style={{margin: '-20px 50px 12px 4px', border: '1px solid #f5f5f5', borderTop: 'none' }}>
            <div className="m-4 mb-1 font-serif">{restaurantInfo?.name}</div>
            <div className=" ml-4 font-serif text-xs text-gray-600">{restaurantInfo?.locality}</div>
            <div className=" ml-4 mt-3 font-serif text-xs text-blue-500 font-bold">VIEW FULL MENU</div>
            <hr className="m-2 mt-4"></hr>
             {cartItems?.map((item, index)=>{
                return (<div className="ml-4 mt-3 font-serif text-xs text-black">{item?.item?.name}</div>)
            })}       
        </div>
        </div>
        ): (isCartHovered &&
        <div className="flex justify-end">
        <div className="w-10 h-10 bg-white transform rotate-45 absolute z-50" style={{margin: '-22px 56px 12px 4px' }}></div>
        <div className="w-60 h-30 bg-white absolute z-50 items-end mr-8" style={{margin: '-20px 50px 12px 4px', border: '1px solid #f5f5f5', borderTop: 'none' }}>
            <div className=" ml-4 mt-3 font-serif text-md text-blue-500 font-bold">CART EMPTY</div> 
            <p className="m-4 text-sm">Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
        </div>
        </div>)
        }
    </>);
};

export default Header;