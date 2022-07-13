import { configureStore } from "@reduxjs/toolkit";
import numberAction from "../redux/actions/numberAction";

export const store = configureStore({
  reducer: {
    numberAction: numberAction
  },
});