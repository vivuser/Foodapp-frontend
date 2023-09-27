import React, { useEffect } from "react";
import { useState } from "react";
// import ReactDOM from "react-dom/client";
import './index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer   from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Instamart from "./components/Instamart";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import store from "./Utils/store";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Search from "./components/Search";
import OrderStatus from "./components/OrderStatus";
import PasswordReset from "./components/PasswordReset";
import { UserProvider } from "./components/userContext";
import { RestaurantProvider } from "./components/restaurantContext";

 const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Namaste React",
        email: "support@Namastedev.com",
    })



    // useEffect(()=>{
    //     //authenticate user
    //     set
    // },[])

    return (
        <UserProvider>
        <RestaurantProvider>
        <Provider store={store}>
        {/* <UserContext.Provider value={
            {user: user,
            setUser: setUser,} */}
            {/* }> */}
        <Header/>
        <Outlet />
        <Footer />
        {/* </UserContext.Provider> */}
        </Provider>
        </RestaurantProvider>
        </UserProvider>
    );
}

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error/>,
        children : [
            {
            path: '/',
            element:<Body user = {{
                name: "Namaste React",
                email: "support@Namastedev.com",
            }}/>
            },
            {
                path: '/search',
                element:<Search/>
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path: '/contact',
                element:<Contact/>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: '/instamart',
                element: <Instamart />
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/orderStatus/:dbId',
                element: <OrderStatus />
            },
            {
                path: '/reset-password/:resTok',
                element: <PasswordReset/>
            }
        ]
    }
])
