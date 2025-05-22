import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import courseFormSlice from "./slices/courseForm";
import adminLoginSlice from "./slices/admin";

export const makeStore = () => {
  return configureStore({
    reducer: {
      courseFormReducer: courseFormSlice,
      adminLoginReducer: adminLoginSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
export const wrapper = createWrapper<AppStore>(makeStore);
