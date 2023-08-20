import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

export const GeneralSlice = createSlice({
  name: "General",
  initialState,
  reducers: {
    //Sidebar reducers
    openSidebar: (State) => {
      State.isSidebarOpen = true;
    },
    closeSidebar: (State) => {
      State.isSidebarOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSidebar, closeSidebar } = GeneralSlice.actions;

export default GeneralSlice.reducer;
