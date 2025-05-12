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

// export const uploadImageToCloudinary = createAsyncThunk(
//   "image/uploadImageToCloudinary",
//   async (file: File, thunkAPI) => {
//     try {
//       const response = await axiosInstance.post(
//         "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
//         formData
//       );

//       return response.data.secure_url; // ✅ Image URL
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.response?.data || "Upload failed");
//     }
//   }
// );

export const uploadImageToCloudinary = createAsyncThunk(
  "image/uploadImageToCloudinary",
  async (file: File, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Ever-tech-solution"); // 👈 Replace this
      formData.append("cloud_name", "dprzsp6w8"); // 👈 Optional for endpoint

      const response = await axiosInstance.post(
        "https://api.cloudinary.com/v1_1/dprzsp6w8/image/upload",
        formData
      );

      return response.data.secure_url;
    } catch (error: any) {
      console.error(" this  is cloudinary error ", error.response?.data);
      return thunkAPI.rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);

// export const imgUploader = createAsyncThunk(
//   "courseForm/post",
//   async (userData) => {
//     try {
//       const response = await axiosInstance.post("/api/upload", userData);
//       console.log(
//         "This is response on slice post user data data =========> ",
//         response.data
//       );

//       return response.data;
//     } catch (error) {
//       const errorAxios = error as AxiosError;
//       const errorMessage =
//         (errorAxios.response?.data as { message?: string })?.message ||
//         "Something went wrong!";
//       throw new Error(errorMessage);
//     }
//   }
// );

interface courseFormState {
  userData: userData[];
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
      });
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
