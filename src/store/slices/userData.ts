import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { ErrorResponse, userData } from "@/types/types";

export const courseForm = createAsyncThunk(
  "courseForm/post",
  async (formData: FormData, { rejectWithValue }) => {
    console.log("Thunk Start - FormData:", ...formData.entries());
    try {
      const response = await axiosInstance.post("/api/userData", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 100000,
      });

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

export const getUserData = createAsyncThunk("userData/get", async () => {
  try {
    const response = await axiosInstance.get("/api/userData", {
      timeout: 20000,
    });
    console.log(
      "this is response of userData get api thunk =====>",
      response.data
    );
    return response.data;
  } catch (error) {
    const errorAxios = error as AxiosError<ErrorResponse>;
    console.error("this is axios error ===>", errorAxios);
  }
});

export const updateUserStatus = createAsyncThunk(
  "userData/updateStatus",
  async (
    { id, status }: { id: string; status: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.put(`/api/userData`, { id, status });
      console.log("this is put api thunk response===> ", response.data);

      return response.data;
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      return rejectWithValue({
        message: err.response?.data?.message || "Failed to update status",
        code: err.code,
      });
    }
  }
);

interface UserDataState {
  userData: userData[];
  loading: boolean;
  error: string | null;
  submittedData: any | null;
}

const initialState: UserDataState = {
  userData: [],
  loading: false,
  error: null,
  submittedData: null,
};

const userDataSlice = createSlice({
  name: "userData",
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
      })
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        console.log("this is payload action =====> ", action.payload);

        state.userData = action.payload?.data || [];
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string })?.message || "Fetch failed";
      });
  },
});

export const { resetFormState } = userDataSlice.actions;
export default userDataSlice.reducer;
