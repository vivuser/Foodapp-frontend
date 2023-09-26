import { useContext } from "react";
import UserContext from "../Utils/UserContext";
import { Link } from "react-router-dom";

const Footer = () => {

    const { user } = useContext(UserContext)

    return(<>
    <div className="bg-pink-200 py-8">
        <div className="flex justify-between items-center font-serif pb-16">
        <div className="flex flex-col items-center text-center">
        <Link to="/about">
        <h3 className="pl-20">About</h3>
        </Link>
        <h4 className="pl-20">Blogs</h4>
        <Link to="/instamart">
        <h3 className="pl-20">Instamart</h3>
        </Link>
        <h3 className="pl-20">Delivery Areas</h3>
        <h3 className="pl-20">Contact</h3>
        </div>
        <div className="flex flex-col items-center text-center">
        <h4>Team</h4>
        <h3>Partner with us</h3>
        <h3>Swiggy One</h3>
        <h3>Careers</h3>
        <h3>Swiggy Genie</h3>
        </div>
        <div className="flex flex-col items-center text-center">
        <h4 className="pr-20">Bug Bounty</h4>
        <h3 className="pr-20">Terms and condition</h3>
        <h3 className="pr-20">Cookie Policy</h3>
        <h3 className="pr-20">Privacy Policy</h3>
        <h3 className="pr-20">Contact</h3>
        </div>
        </div>


        <h4 className="text-md text-center font-serif">This site is developed by Vivek Chamyal. send queries to chamyal17@gmail.com</h4>
        <div className="text-center">
          <p className="font-sm font-semibold">&copy; {new Date().getFullYear()} vivswoldtech</p>
        </div>
        
        </div>
   </> )
}

export default Footer;