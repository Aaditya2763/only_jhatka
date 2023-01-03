import { ActionTypes, dataActionType } from "./dataActionType";
export const setAiReportData = (data) => {
  return {
    type: ActionTypes.PRODUCT_DATA,
    payload: data,
  };
}