import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orderHistory",
    initialState: {
        orders: [], //an array to store order History
    },
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        clearOrderHistory: (state) => {
            state.orders = [];
        }
    }
});

export const { addOrder, clearOrderHistory } = orderSlice.actions;
export default orderSlice.reducer;