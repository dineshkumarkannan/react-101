import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: function (state, action) {
            state.items.push(action.payload);
        },
        removeItem: function (state, action) {
            state.items.pop();
        },
        clearItem: function (state, action) {
            // state.items.length = 0;
            return { items: [] };
        },
    },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
