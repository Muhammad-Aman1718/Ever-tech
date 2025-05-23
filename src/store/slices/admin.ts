import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { adminData, ErrorResponse } from "@/types/types";

export const admin = createAsyncThunk<
  any,
  adminData,
  { rejectValue: ErrorResponse }
>("adminLogin/post", async (loginData, { rejectWithValue }) => {
  console.log("Thunk Start - admin Data:", loginData);
  try {
    const response = await axiosInstance.post("/api/adminLogin", loginData);
    console.log("Full API Response:", response.data);
    const { token } = response.data;
    console.log("token ========> ", token);

    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    const errorAxios = error as AxiosError<ErrorResponse>;

    console.error("This is Axios Error:", errorAxios);

    // return error in a way Redux can handle
    if (errorAxios.response && errorAxios.response.data) {
      return rejectWithValue(errorAxios.response.data);
    }

    return rejectWithValue({ message: "Something went wrong" });
  }
});

interface AdminLoginState {
  loading: boolean;
  error: string | null;
  submittedData: any | null;
}

const initialState: AdminLoginState = {
  loading: false,
  error: null,
  submittedData: null,
};

const adminLogin = createSlice({
  name: "adminLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(admin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(admin.fulfilled, (state, action) => {
        state.loading = false;
        state.submittedData = action.payload;
      })
      .addCase(admin.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string }).message ||
          "Submission failed";
      });
  },
});

// export const { resetFormState } = adminLogin.actions;
export default adminLogin.reducer;
