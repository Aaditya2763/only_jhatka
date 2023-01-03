import { ActionTypes } from "./dataActionType";

const data = {
  productData: [],
 
};

export const product = (state = data, action) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_DATA:
      return { ...state, productData: action.payload.productData };

    default:
      return state;
  }
};
