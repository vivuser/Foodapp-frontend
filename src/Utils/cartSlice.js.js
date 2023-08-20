import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action)=>{
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.item.id === newItem.item.id);

            if (existingItem) {
                existingItem.quantity += 1;
                console.log(existingItem)
                console.log(action.payload)

            }

            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            const index = action.payload
            state.items.splice(index,1);
        },
        // decrementItem: (state, action) => {
        //     const itemToSubtract = action.payload
        //     const itemToDecrement = state.items.find(item => item.item.id === itemToSubtract)
        //     console.log(itemToDecrement)
        //     console.log(action.payload)
        // if (itemToDecrement && itemToDecrement.quantity > 1 ) {
        //     itemToDecrement.quantity -= 1;
        // }
        // },
        decrementItem: (state, action) => {
            const itemIdToDecrement = action.payload;
            const itemToDecrement = state.items.find(item => item.item.id === itemIdToDecrement);
          
            if (itemToDecrement && itemToDecrement.quantity > 1) {
              itemToDecrement.quantity -= 1;
            }
          },
        clearCart: (state) =>{
            state.items =[];
        }
    }
})

export const {addItem, removeItem, clearCart, decrementItem} = cartSlice.actions

export default cartSlice.reducer;