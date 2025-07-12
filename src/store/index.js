// import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { wishReducer } from "./wishlistSlice";

// export const store = configureStore({
//   reducer: {
//     counter: cartReducer,
//   },
// });



export const store = configureStore({
    reducer: {
        counter: wishReducer,
    }
});