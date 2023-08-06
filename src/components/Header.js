import { useState, useContext } from "react";
import Logo from '../assets/foodvilla.png' 
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
    <a href="/">
    <img className="logo" 
    alt ="logo"
    src= {Logo} />
    </a>
);

const Header = () => {

    const [title, setTitle] = useState("FoodVilla");
    const [login, setLogin] = useState(false);


    const {user} = useContext(UserContext)

    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)

    const changeState= () => {
        setLogin(!login);
    }

    return (
    <div className="header">
    <Title />

        <h1>{title}</h1>
        <button onClick={()=> setTitle('Food Galaxy')}>Change Title</button>

        <div className="nav-items">
            <ul>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to="/about"> 
                <li>About</li>
                </Link>
                <Link to="/contact">
                <li>Contact</li>
                </Link>
                <Link to="/instamart">
                <li>Instamart</li>
                </Link>
                <li>Cart -{cartItems.length} items</li>
                
            </ul>
        </div>
        <h1>{user.name}</h1>
        <button onClick={changeState}>{login ? 'login':'logout'}</button>
    </div>
    );
};

export default Header;