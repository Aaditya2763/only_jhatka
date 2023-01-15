<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import couterSlice from "./counter/couterSlice";
import carouselSlice from "./carousel/carouselSlice";
import productsSlice from "./products/productsSlice";
import userSlice from "./user/userSlice";
export const store= configureStore({
    reducer:{
        counter:couterSlice,
        products:productsSlice,
        carouseldata:carouselSlice,
        user:userSlice,
    }
}) 
=======
import {configureStore} from '@reduxjs/toolkit';
import couterSlice from './counter/couterSlice';
import carouselSlice from './carousel/carouselSlice';
import productsSlice from './products/productsSlice';
export const store = configureStore({
  reducer: {
    counter: couterSlice,
    products: productsSlice,
    carouseldata: carouselSlice,
  },
});
>>>>>>> 799a37f2e45aa0d81b33dfc401c6878b45a376f6
