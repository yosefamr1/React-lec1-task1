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
                state.wishItem = [...state.wishItem, { ...action.payload}];
            
        },

        removeFromwishlist: (state, action) => { },
    }
})

export const wishReducer = wishlistSlice.reducer;
export const { addtowishlist } = wishlistSlice.actions;

