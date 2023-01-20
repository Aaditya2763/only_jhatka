
import { configureStore } from "@reduxjs/toolkit";
import couterSlice from "./counter/couterSlice";
import carouselSlice from "./carousel/carouselSlice";
import productsSlice from "./products/productsSlice";
import userSlice from "./user/userSlice";
import notificationSlice from "./notification/notificationSlice";
export const store= configureStore({
    reducer:{
        counter:couterSlice,
        products:productsSlice,
        carouseldata:carouselSlice,
        user:userSlice,
        notifications:notificationSlice,
    }
}) 
