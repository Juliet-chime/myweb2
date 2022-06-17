import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../api";
import apiRoutes from "../../apiRoutes";
import { AuthProps } from "./authType";

const initialState: AuthProps = {
  isLoading: false,
  status: "idle",
  user: {
    ".expires": null,
    ".issued": null,
    access_token: null,
    expires_in: null,
    profilePix: null,
    roles: null,
    token_type: null,
    user_id: null,
    userassignedmenu: null,
    username: null,
  },
  error: [],
};

export const authUser = createAsyncThunk("authUser", async (data: any) => {
  try {
    const response = await apiRequest(apiRoutes.GetToken(), "post", data);
    return response.data;
  } catch (err) {
    return err;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.isLoading = true;
        state.status = "loading";
      })
      .addCase(authUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.status = "succeeded";
        state.user = payload;
      })
      .addCase(authUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
