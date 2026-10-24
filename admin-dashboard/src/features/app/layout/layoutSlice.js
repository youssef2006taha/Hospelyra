import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",

  initialState: {
    sidebarMode: "full", // full || mini || hidden
    hideSidebar: true,
    showLabels : false
  },

  reducers: {
    setSidebarMode(state, action) {
      state.sidebarMode = action.payload;
    },

    toggleSidebarSm(state) {
      if (state.sidebarMode === "hidden")
        state.hideSidebar = !state.hideSidebar;
    },

    closeSidebar(state) {
      state.hideSidebar = true;
    },

    openSidebar(state) {
      state.hideSidebar = false;
    },

    toggleLabels(state) {
      state.showLabels = !state.showLabels
    }
  },
});

export const {
  setSidebarMode,
  toggleSidebarSm,
  closeSidebar,
  openSidebar,
  toggleLabels
} = layoutSlice.actions;

export default layoutSlice.reducer;