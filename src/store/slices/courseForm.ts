import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { userData } from "@/types/types";

export const courseForm = createAsyncThunk(
  "courseForm/post",
  async (userData: userData) => {
    try {
      const response = await axiosInstance.post("/api/userData", userData);
      console.log(
        "This is response on slice post user data data =========> ",
        response.data
      );

      return response.data;
    } catch (error) {
      const errorAxios = error as AxiosError;
      const errorMessage =
        (errorAxios.response?.data as { message?: string })?.message ||
        "Something went wrong!";
      throw new Error(errorMessage);
    }
  }
);
export const imgUploader = createAsyncThunk(
  "courseForm/post",
  async (userData) => {
    try {
      const response = await axiosInstance.post("/api/upload", userData);
      console.log(
        "This is response on slice post user data data =========> ",
        response.data
      );

      return response.data;
    } catch (error) {
      const errorAxios = error as AxiosError;
      const errorMessage =
        (errorAxios.response?.data as { message?: string })?.message ||
        "Something went wrong!";
      throw new Error(errorMessage);
    }
  }
);

interface courseFormState {
  userData: userData[]; // Array of 'userData' type
  loading: boolean;
  error: string | null;
}

const initialState: courseFormState = {
  userData: [],
  loading: false,
  error: null,
};

const courseFormSlice = createSlice({
  name: "courseForm",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(courseForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(courseForm.fulfilled, (state, action) => {
        state.loading = false;
        state.userData.push(action.payload); // Add the user data to state
      })
      .addCase(courseForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to upload img";
      })
      // .addCase(imgUploader.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(imgUploader.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.userData.push(action.payload); // Add the user data to state
      // })
      // .addCase(imgUploader.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message || "Failed to upload img";
      // });
  },
});

export default courseFormSlice.reducer;
