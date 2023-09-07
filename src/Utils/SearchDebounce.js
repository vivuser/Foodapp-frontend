import { filterMenu} from "./searchMenu";

function searchDebounce(searchFunc, delay) {


    let debounceTimeout;
    return function debouncedSearch(search, menuItems){
        clearTimeout(debounceTimeout);


    debounceTimeout = setTimeout(() => {
        const data  = searchFunc(search, menuItems);

    }, delay);
};
}

export const debouncedSearch = searchDebounce(filterMenu,300)
