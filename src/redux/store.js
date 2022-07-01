import { configureStore } from "@reduxjs/toolkit";
import sidebarTogglerReducer from "./sidebarToggler";
import videoReducer from "./video";

export default configureStore({
  reducer: {
    sidebarToggler: sidebarTogglerReducer,
    video: videoReducer,
  },
});
