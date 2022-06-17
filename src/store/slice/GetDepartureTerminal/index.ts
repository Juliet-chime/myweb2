import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../api";
import apiRoutes from "../../apiRoutes";
import { DepartureProps } from "./deptType";

const initialState: DepartureProps = {
  isLoading: false,
  status: "idle",
  departureTerminal: [],
  error: [],
};

export const getDepartureTerminal = createAsyncThunk("authUser", async (userToken:any) => {
  try {
    const response = await apiRequest(apiRoutes.DepartureTerminals(), "get",null,userToken);
    return response.data;
  } catch (err) {
    return err;
  }
});

export const  getDepartureTerminalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase( getDepartureTerminal.pending, (state) => {
        state.isLoading = true;
        state.status = "loading";
      })
      .addCase( getDepartureTerminal.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.status = "succeeded";
        state.departureTerminal = payload?.Object?.Items;
      })
      .addCase( getDepartureTerminal.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = payload;
      });
  },
});

export default  getDepartureTerminalSlice.reducer;