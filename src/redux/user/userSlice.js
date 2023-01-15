<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
import User from "../../assets/images/user.png"
const initialState=[
    {
        name:"Aditya Singh",
        phoneNo:"9467665000",
        image:User,
        address:"M-Town noida sector 15"
    }
]
export const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{

    }
})
export const user=(state)=>state.user;
export default userSlice.reducer
=======
import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
>>>>>>> 799a37f2e45aa0d81b33dfc401c6878b45a376f6
