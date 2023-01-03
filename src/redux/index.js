import { combineReducers } from "redux";
import {product } from "./dataReducer";

const reducers = combineReducers({
productData:product
})

export default reducers;