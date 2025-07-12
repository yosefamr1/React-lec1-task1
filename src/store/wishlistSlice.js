import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
    wishItem: [],
};

export const wishlistSlice = createSlice({
    name: `wishlist`,
    initialState,
    reducers: {
        addtowishlist: (state, action) => {
            console.log("action", action.payload);
            state.wishItem = [...state.wishItem, { ...action.payload }];

        },

        removeFromwishlist: (state, action) => {
            const idToRemove = action.payload;
            state.wishItem = state.wishItem.filter(item => item.id !== idToRemove);
        }
        ,
    }
})

export const wishReducer = wishlistSlice.reducer;
export const { addtowishlist, removeFromwishlist} = wishlistSlice.actions;

