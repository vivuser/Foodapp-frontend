import { useState, useContext } from "react";
import Logo from '../assets/foodvilla.png' 
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
    <a href="/">
    <img className="h-28 p-2" 
    alt ="logo"
    src= {Logo} />
    </a>
);

const Header = () => {

    const [title, setTitle] = useState("FoodVilla");
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

        <h1>{title}</h1>
        <button onClick={()=> setTitle('Food Galaxy')}>Change Title</button>

        <div className="nav-items">
            <ul className="flex py-10">
                <Link to='/'>
                <li className="px-2">Home</li>
                </Link>
                <Link to="/about"> 
                <li className="px-2">About</li>
                </Link>
                <Link to="/contact">
                <li className="px-2">Contact</li>
                </Link>
                <Link to="/instamart">
                <li className="px-2">Instamart</li>
                </Link>
                <Link to="/cart">
                <li className="px-2">Cart items 🛒-{cartItems.length} </li>
                </Link>
                <Link to="/login">
                <li className="px-2">Login</li>
                </Link>
            </ul>
        </div>

        <h1>{user.name}</h1>
        <button onClick={changeState}>{login ? 'login':'logout'}</button>
    </div>
    );
};

export default Header;