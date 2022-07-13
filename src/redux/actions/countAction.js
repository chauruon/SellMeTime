import {INCREMENT,DECREMENT} from "../constant/const"

export const INCREMENT_COUNT = () => {
    return {
      type: INCREMENT,
    };
};
   
export const DECREMENT_COUNT = () => {
    return {
      type: DECREMENT,
    };
};