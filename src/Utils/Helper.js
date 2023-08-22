export function filterData(searchInput, restaurant){
    console.log(restaurant)
    return restaurant.filter((restaura)=>restaura?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()))
 }  