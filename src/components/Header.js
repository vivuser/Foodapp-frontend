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

        <h1 className="font-bold text-3xl mt-8">{title}</h1>

        <div className="nav-items">
            <ul className="flex py-10 mt-1 gap-3">
                <Link to='/'>
                <li className="px-2 font-medium">Home</li>
                </Link>
                <Link to="/about"> 
                <li className="px-2 font-medium">About</li>
                </Link>
                <Link to="/contact">
                <li className="px-2 font-medium">Contact</li>
                </Link>
                <Link to="/instamart">
                <li className="px-2 font-medium">Instamart</li>
                </Link>
                <Link to="/cart">
                <li className="px-2 font-medium">Cart items 🛒-{cartItems.length} </li>
                </Link>
                <Link to="/login">
                <li className="px-2 font-bold">Login 👨🏻‍🦲</li>
                </Link>
            </ul>
        </div>
    </div>
    );
};

export default Header;