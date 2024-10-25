import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
  },
});
export default store;
