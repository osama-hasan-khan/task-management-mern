import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import modalReducer from "../redux/modelSlice";
import workspaceModal from "../redux/workspaceSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    workspace: workspaceModal,
  },
});
