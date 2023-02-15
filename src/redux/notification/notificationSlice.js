import {createSlice} from '@reduxjs/toolkit';
import Chiken from '../../assets/images/chicken.png';

import chickenImage from '../../assets/images/itemImages/chickenLegs.png';
const initialState = [
  {
    title: 'lorem ipsom dolor emet lorem ipsom dolor emet lorem ipsom dolor emet...',
    id:1,
  },{
    title: 'lorem ipsom dolor emet lorem ipsom dolor emet lorem ipsom dolor emet...',
    id:2,
  },{
    title: 'lorem ipsom dolor emet lorem ipsom dolor emet lorem ipsom dolor emet...',
    id:3,
  },
  {
    title: 'lorem ipsom dolor emet lorem ipsom dolor emet lorem ipsom dolor emet...',
    id:5,
  },{
    title: 'lorem ipsom dolor emet lorem ipsom dolor emet lorem ipsom dolor emet...',
    id:6,
  },{
    title: 'lorem ipsom dolor emet lorem ipsom dolor emet lorem ipsom dolor emet...',
    id:7,
  },{
    title: 'lorem ipsom dolor emet lorem ipsom dolor emet lorem ipsom dolor emet...',
    id:8,
  },{
    title: 'lorem ipsom dolor emet lorem ipsom dolor emet lorem ipsom dolor emet...',
    id:9,
  },{
    title: 'lorem ipsom dolor emet lorem ipsom dolor emet lorem ipsom dolor emet...',
    id:10,
  },
  
];

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    clearParticularNotification:(state)=>{
      state.filter(id);

    }
  },
});
export const {clearParticularNotification}=notificationsSlice.actions;
export const allNotifications = state => state.notifications;

export default notificationsSlice.reducer;
