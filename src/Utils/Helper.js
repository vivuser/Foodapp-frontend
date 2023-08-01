export function filterData(searchInput, restaurant){
    return restaurant.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase()))
 }  