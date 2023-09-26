export function filterMenu(search, menuItems) {
    if (!menuItems || search.length ===0) {
      return [];
    }
  
    console.log(menuItems);
    return menuItems.filter((item) =>
      item?.card?.info?.name.toLowerCase()?.includes(search.toLowerCase())
    );
  }
  