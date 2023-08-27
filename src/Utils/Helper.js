export function filterData(searchInput, restaurant){
    if(!restaurant){
        return []
    }
    
    console.log(restaurant)
    return restaurant.filter((restaura)=>restaura?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()))
 }  