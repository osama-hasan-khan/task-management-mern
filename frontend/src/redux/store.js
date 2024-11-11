import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import modalReducer from "../redux/modelSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});
