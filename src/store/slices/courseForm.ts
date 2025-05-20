import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/types/types";

export const courseForm = createAsyncThunk(
  "courseForm/post",
  async (formData: FormData, { rejectWithValue }) => {
    console.log("Thunk Start - FormData:", ...formData.entries());
    try {
      const response = await axiosInstance.post("/api/userData", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 30000,
      });

      // console.log("Raw API Response:", response.data);

      // if (response.data.success) {
      //   console.log("Success Response Data:", response.data.data);
      //   return response.data.data;
      // }

      console.log("Full API Response:", response.data); // 👈 Debug entire response

      // If success flag exists (adapt to your API's actual response)
      // if (response.data?.success) {
      // return response.data; // 👈 Return entire response.data
      // }
      return response.data;
      // return rejectWithValue(response.data);
    } catch (error) {
      const errorAxios = error as AxiosError<ErrorResponse>;
      return rejectWithValue({
        message: errorAxios.response?.data?.message || "mission failed",
        code: errorAxios.code,
      });
    }
  }
);

interface CourseFormState {
  loading: boolean;
  error: string | null;
  submittedData: any | null;
}

const initialState: CourseFormState = {
  loading: false,
  error: null,
  submittedData: null,
};

const courseFormSlice = createSlice({
  name: "courseForm",
  initialState,
  reducers: {
    resetFormState: (state) => {
      state.loading = false;
      state.error = null;
      state.submittedData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(courseForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(courseForm.fulfilled, (state, action) => {
        state.loading = false;
        state.submittedData = action.payload;
      })
      .addCase(courseForm.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string }).message ||
          "Submission failed";
      });
  },
});

export const { resetFormState } = courseFormSlice.actions;
export default courseFormSlice.reducer;
