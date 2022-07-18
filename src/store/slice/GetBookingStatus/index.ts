import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiRequest } from '../../api'
import apiRoutes from '../../apiRoutes'
import { BookingStatusProps } from './type'

const initialState: BookingStatusProps = {
  isLoading: false,
  status: 'idle',
  bookingStatus: [],
  error: [],
}

export const getBookingStatus = createAsyncThunk('refsearch', async (value: any) => {
  try {
    const response = await apiRequest(apiRoutes.BookingStatus(value), 'get', null)
    return response.data
  } catch (err) {
    return err
  }
})

export const getBookingStatusSlice = createSlice({
  name: 'refSearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookingStatus.pending, (state) => {
        state.isLoading = true
        state.status = 'loading'
      })
      .addCase(getBookingStatus.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.status = 'succeeded'
        state.bookingStatus = payload
      })
      .addCase(getBookingStatus.rejected, (state, { payload }) => {
        state.isLoading = false
        state.status = 'failed'
        state.error = payload
      })
  },
})

export default getBookingStatusSlice.reducer
