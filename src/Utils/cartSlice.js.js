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
            console.log(newItem)
            console.log(existingItem)
            if (existingItem) {
                existingItem.quantity += 1;
                console.log(existingItem)
                console.log(action.payload)

            }

            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            const index = action.payload
            console.log(index, "JGGGH")
            const updatedItems = state.items.filter((item)=> (item.item.id !== index))
            console.log(updatedItems)
            // return {
            //     ...state},
            //     items = updatedItems
            // }
        },
        decrementItem: (state, action) => {
            const itemIdToDecrement = action.payload;
           console.log(itemIdToDecrement)
           const itemIndex = state.items.findIndex(item => item.item.id === itemIdToDecrement.item.id);
            if (itemIdToDecrement) {  
                state.items.splice(itemIndex, 1);
            }
          },
        clearCart: (state) =>{
            state.items =[];
        }
    }
})

export const {addItem, removeItem, clearCart, decrementItem} = cartSlice.actions

export default cartSlice.reducer;