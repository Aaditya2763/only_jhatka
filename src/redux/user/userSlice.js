import { createSlice, nanoid } from "@reduxjs/toolkit";
import userimage from "../../assets/images/profileImg.png";

const initialState=[
    {
        userName:'Aditya Singh',
        phoneno:9467668000,
        Address:"Noida sector-15",
        id:1,
        image:userimage,
    }

]

export const userSlice=createSlice({
name:'user',
initialState,
reducers:{
    createUser:{
        reducer(state,action){
            state.push(action.payload)
        },
        prepare(userName,phoneNo){
            return{
                payload:{
                    id:nanoid(),
                    userName,
                    phoneNo,
                }
            }
        }
    },

    updateUserData:{
reducer(state,action){
    state = action.payload;
},
prepare(userName,phoneNo){
    return{
        payload:{
            id:nanoid(),
            UserName:userName,
            phoneNo:phoneNo,
        }
    }
}

    }
}
});
export const user=(state)=>state.user;
export const {createUser,updateUserData}=userSlice.actions;
export default userSlice.reducer; 
