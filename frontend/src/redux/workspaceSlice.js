import { createSlice } from "@reduxjs/toolkit";

const workspaceSlice = createSlice({
  name: "workspace",
  
  initialState: {
    isWorkspaceModalOpen: false,
  },

  reducers: {
    openWorkspaceModal: (state) => {
      state.isWorkspaceModalOpen = true;
    },

    closeWorkspaceModal: (state) => {
      state.isWorkspaceModalOpen = false;
    },
  },
});

export const { openWorkspaceModal, closeWorkspaceModal } = workspaceSlice.actions;
export default workspaceSlice.reducer;
