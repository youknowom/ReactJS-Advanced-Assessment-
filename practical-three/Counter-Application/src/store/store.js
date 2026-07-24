import { configureStore } from "@reduxjs/toolkit";
import Counter from "../components/Counter";

export const store = configureStore({
  reducer: {
    Counter: counterReducer,
  },
});
