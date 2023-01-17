import { createSlice } from "@reduxjs/toolkit";
import userimage from "../../assets/images/profileImg.png";
const initialState=[
    {
        userName:'Aditya Singh',
        phoneno:9467668000,
        Address:"Noida sector-15",
        image:userimage,
    }

]

export const userSlice=createSlice({
name:'user',
initialState:initialState,
reducers:{
}
});
export const user=(state)=>state.user;

export default userSlice.reducer; 