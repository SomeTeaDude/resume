import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import sidebarSlice from "../features/sidebar/sidebarSlice";

export default configureStore({
  reducer: {
    navbar: navbarReducer,
    sidebar: sidebarSlice,
  },
});
