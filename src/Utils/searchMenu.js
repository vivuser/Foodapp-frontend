export function filterMenu(search, menuItems) {
    if (!menuItems) {
      return [];
    }
  
    console.log(menuItems);
    return menuItems.filter((item) =>
      item?.card?.info?.name.toLowerCase()?.includes(search.toLowerCase())
    );
  }
  