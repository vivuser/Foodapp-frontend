import { useState } from "react";
import Logo from '../assets/foodvilla.png' 
import { Link } from "react-router-dom";

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
                <li>Cart</li>
                
            </ul>
        </div>
        <button onClick={changeState}>{login ? 'login':'logout'}</button>
    </div>
    );
};

export default Header;