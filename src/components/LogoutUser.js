import { useState } from "react"
import { useUser } from "./userContext"
import Profile from "./Profile";

const LogoutUser = () => {
    const { user, setUser } = useUser();

    const [logout , setLogout] = useState(false)

    const changeUserStatus = () => {
        setUser(null);
        setLogout(true)
        localStorage.removeItem("user")
        console.log("User data removed from localStorage");
    }

    return (<div>
        {!logout && (<div className="font-serif text-xl text-orange-200 m-8">User Logged out successfully </div>)}
        </div>
    )
}

export default LogoutUser;