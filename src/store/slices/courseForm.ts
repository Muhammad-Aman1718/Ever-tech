import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";

export const courseForm = createAsyncThunk(
  "courseForm/post",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/userData", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    } catch (error) {
      const errorAxios = error as AxiosError;
      return rejectWithValue({
        message: errorAxios.response?.data?.message || "Submission failed",
        code: errorAxios.code
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
  submittedData: null
};

const courseFormSlice = createSlice({
  name: "courseForm",
  initialState,
  reducers: {
    resetFormState: (state) => {
      state.loading = false;
      state.error = null;
      state.submittedData = null;
    }
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
        state.error = (action.payload as { message: string }).message || "Submission failed";
      });
  },
});

export const { resetFormState } = courseFormSlice.actions;
export default courseFormSlice.reducer;