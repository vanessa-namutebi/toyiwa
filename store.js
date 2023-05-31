import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./state/LoginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
