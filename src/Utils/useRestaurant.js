import { useState } from "react";
import { useEffect } from "react";
import { FETCH_MENU_URL } from "../components/Constants";

const useRestaurant = (resId) => {

    const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState(null)
  const[title, setTitle] = useState(null)
  const [restaurantName, setRestaurantName] = useState(null)
  const [wholeData, setWholeData] = useState(null)


    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL + resId
        );
        const json = await data.json();
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
        setMenuItems(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)


        console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setWholeData(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

        setRestaurantName(json.data?.cards[0].card.card.info)
        console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title)
        setTitle(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title)
        console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
      }

      return {
            restaurant,
            menuItems,
            title,
            restaurantName,
            wholeData
      };

};

export default useRestaurant