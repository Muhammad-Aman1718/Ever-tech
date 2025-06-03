import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { ErrorResponse, SlicesInitialState } from "@/types/types";

interface contactUs {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const contact = createAsyncThunk(
  "contact/post",
  async (contactData: contactUs, { rejectWithValue }) => {
    console.log("Thunk Start - contact Data:", contactData);
    try {
      const response = await axiosInstance.post("/api/contactUs", contactData);
      console.log("Full API Response:", response.data);

      return response.data;
    } catch (error) {
      const errorAxios = error as AxiosError<ErrorResponse>;

      return rejectWithValue({
        message: errorAxios.response?.data?.message || "Submission failed",
        code: errorAxios.code,
      });
    }
  }
);



const initialState: SlicesInitialState = {
  loading: false,
  error: null,
  submittedData: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(contact.fulfilled, (state, action) => {
        state.loading = false;
        state.submittedData = action.payload;
      })
      .addCase(contact.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string }).message ||
          "Submission failed";
      });
  },
});

export default contactSlice.reducer;
