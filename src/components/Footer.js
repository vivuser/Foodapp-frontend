import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Footer = () => {

    const { user } = useContext(UserContext)

    return(
        <h4>This site is developed by {user.name}. send queries to {user.email}</h4>
    )
}

export default Footer;