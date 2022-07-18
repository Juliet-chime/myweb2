import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiRequest } from '../../api'
import apiRoutes from '../../apiRoutes'
import { BookingProps } from './type'

const initialState: BookingProps = {
  isLoading: false,
  status: 'idle',
  bookingSearch: {},
  error: [],
}

export const getBookingSearch = createAsyncThunk('bookinglist', async (data: any) => {
  try {
    const response = await apiRequest(apiRoutes.BookingSearch(), 'post', data)
    return response.data
  } catch (err) {
    return err
  }
})

export const getBookingSearchSlice = createSlice({
  name: 'bookinglist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookingSearch.pending, (state) => {
        state.isLoading = true
        state.status = 'loading'
      })
      .addCase(getBookingSearch.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.status = 'succeeded'
        state.bookingSearch = payload.Object
      })
      .addCase(getBookingSearch.rejected, (state, { payload }) => {
        state.isLoading = false
        state.status = 'failed'
        state.error = payload
      })
  },
})

export default getBookingSearchSlice.reducer
