import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../services/reducers/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
