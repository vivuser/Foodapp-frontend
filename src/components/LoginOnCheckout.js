import { useState } from "react"

const LoginOnCheckout = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const CloseSignIn = () =>{
        <h1 className="bg-red-200">SignUp</h1>
        setIsOpen(!isOpen)
    }

    return ( <div className ={`bg-gray-800 ${isOpen ? 'translate-x-0': 'translate-x-full'}`} >
        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        onClick={CloseSignIn}>
cloooooose
        </button>
 <input type="tel" id="phone" name="phone" placeholder="Phone number" />
    </div>)

}

export default LoginOnCheckout;