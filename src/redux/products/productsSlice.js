import {createSlice} from '@reduxjs/toolkit';
import Chiken from '../../assets/images/chicken.png';

import chickenImage from '../../assets/images/itemImages/chickenLegs.png';
const initialState = [
  {
    title: 'Fish',
    image: Chiken,
    price: 150,
    weight: 500,
    point: 4.6,
    uri: require('../../assets/images/carouselimg.png'),
  },
  {
    title: 'Mutton',
    image: Chiken,
    price: 160,
    weight: 500,
    point: 4.6,
    uri: require('../../assets/images/carouselimg.png'),
  },
  {
    title: 'Chiken',
    image: Chiken,
    price: 150,
    weight: 500,
    point: 4.6,
    uri: require('../../assets/images/carouselimg.png'),
  },
];

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
});
export const allproducts = state => state.products;

export default productsSlice.reducer;
