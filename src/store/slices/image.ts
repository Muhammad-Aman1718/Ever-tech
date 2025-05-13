import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Directly using axios, not axiosInstance
import { userData } from "@/types/types";

// ✅ Correct Cloudinary Thunk
export const uploadImageToCloudinary = createAsyncThunk(
  "image/uploadImageToCloudinary",
  async (file: File, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Ever-tech-solution");

      // ✅ Cloudinary URL (use your actual cloud name here)
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dprzsp6w8/image/upload",
        formData
      );

      return response.data.secure_url; // Return URL string
    } catch (error: any) {
      console.error("Cloudinary upload error:", error.response?.data);
      return thunkAPI.rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);

interface courseFormState {
  userData: string[]; // since secure_url is string
  loading: boolean;
  error: string | null;
}

const initialState: courseFormState = {
  userData: [],
  loading: false,
  error: null,
};

const image = createSlice({
  name: "courseForm",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(uploadImageToCloudinary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadImageToCloudinary.fulfilled, (state, action) => {
        state.loading = false;
        state.userData.push(action.payload); // ✅ pushing image URL
      })
      .addCase(uploadImageToCloudinary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default image.reducer;
