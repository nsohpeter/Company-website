import { createSlice } from "@reduxjs/toolkit";
import { sublinks } from "../../Utils/Data";

const initialState = {
  isSidebarOpen: false,
  isSubmenuOpen: false,
  linksItem: sublinks,
  location: {},
  page: { page: "", links: [] },
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
    //submenu reducers
    openSubmenu: (State, action) => {
      const { page, location } = action.payload;
      const { center, bottom } = location;

      const pageObj = State.linksItem.find((link) => link.page === page);

      if (page) {
        State.page = pageObj;
      }
      State.location = { center, bottom };

      State.isSubmenuOpen = true;
    },
    closeSubmenu: (State) => {
      State.isSubmenuOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSidebar, closeSidebar, openSubmenu, closeSubmenu } =
  GeneralSlice.actions;

export default GeneralSlice.reducer;
