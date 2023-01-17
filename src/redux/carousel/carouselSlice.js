import {createSlice} from '@reduxjs/toolkit';
import Chiken from '../../assets/images/chicken.png';

const initialState = [
  // {uri: require('../../assets/images/carouselimg.png')},
  // {uri: require('../../assets/images/carouselimg.png')},
  // {uri: require('../../assets/images/carouselimg.png')},
  // {uri: require('../../assets/images/carouselimg.png')},
  // {uri: require('../../assets/images/carouselimg.png')},
  // {uri: require('../../assets/images/carouselimg.png')},
  {
    title: 'Chiken',
    image: Chiken,
    price: 150,
    weight: 500,
    point: 4.6,
  },
];

export const carouselSlice = createSlice({
  name: 'carouselImages',
  initialState: initialState,
  reducers: {},
});

export const allCarouselImg = state => state.carouselImages;

export default carouselSlice.reducer;
