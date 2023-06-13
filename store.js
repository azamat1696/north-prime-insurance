import { configureStore } from '@reduxjs/toolkit';
import basketSlice  from "./features/basketSlice";
import contentSlice from "./features/contentSlice";
export const store = configureStore({
     reducer: {
       basket: basketSlice,
       content: contentSlice,
    },

})

