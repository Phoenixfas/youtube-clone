import { configureStore } from "@reduxjs/toolkit";
import sidebarTogglerReducer from "./sidebarToggler";

export default configureStore({
  reducer: {
    sidebarToggler: sidebarTogglerReducer,
  },
});
