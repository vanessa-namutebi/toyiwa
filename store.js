import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./state/LoginSlice";
import requestsSlice from "./state/requestsSlice";
const store = configureStore({
  reducer: {
    login: loginReducer,
    requests: requestsSlice,
  },
});

export default store;
