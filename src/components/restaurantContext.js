import React, { createContext, useContext, useState } from 'react';

const RestaurantContext  = createContext();

export const useRestaurantInfo = () => {
    return useContext(RestaurantContext);
};

export const RestaurantProvider = ({ children }) => {

    const [ restaurantInfo, setRestaurantInfo ]  = useState(null)

    return (
        <RestaurantContext.Provider value={{ restaurantInfo, setRestaurantInfo }}>
            {children}
        </RestaurantContext.Provider>
    );
}