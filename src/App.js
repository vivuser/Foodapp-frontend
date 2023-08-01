import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
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
 const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Namaste React",
        email: "support@Namastedev.com",
    })

    return (
        <>
        <Header/>
        <Outlet />
        <Footer />
        </>
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
            }
        ]
    }
])
