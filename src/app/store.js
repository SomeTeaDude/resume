import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";

export default configureStore({
	reducer: {
		navbar: navbarReducer,
	},
});
