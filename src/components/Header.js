import { useState, useContext } from "react";
import Logo from '../assets/foodvilla.png' 
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import '../App.css'
import { MdSearch } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


const Title = () => (
    <a href="/">
    <img className="h-24" 
    alt ="logo"
    src= {Logo} />
    </a>
);

const Header = () => {

    const [title, setTitle] = useState("Food Villa");
    const [login, setLogin] = useState(false);


    const {user} = useContext(UserContext)

    const cartItems = useSelector(store => store.cart.items)
    // console.log(cartItems)

    const changeState= () => {
        setLogin(!login);
    }


    return (
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
                className="ml-1 text-2xl text-gray-600"/>
                <span className="text-red-500">{cartItems.length}</span>
                </Link>

                <Link to="/login">
                        <FontAwesomeIcon
                            icon={faUser} // Use the user icon here
                            className="ml-1 mr-4 text-2xl text-gray-600"
                        />
                    </Link>
            </ul>
        </div>
    </div>
    );
};

export default Header;