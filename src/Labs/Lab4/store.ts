import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
const store = configureStore({
  reducer: { helloReducer },
});
export default store;
