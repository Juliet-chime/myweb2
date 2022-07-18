import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiRequest } from '../../api'
import apiRoutes from '../../apiRoutes'
import { HireSearchProps } from './type'

const initialState: HireSearchProps = {
  isLoading: false,
  status: 'idle',
  hireSearch: [],
  error: [],
}

export const getHireSearch = createAsyncThunk('hiresearch', async (data: any) => {
  try {
    const response = await apiRequest(apiRoutes.HireSearch(), 'post', data)
    return response.data
  } catch (err) {
    return err
  }
})

export const getHireSearchSlice = createSlice({
  name: 'hireSearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHireSearch.pending, (state) => {
        state.isLoading = true
        state.status = 'loading'
      })
      .addCase(getHireSearch.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.status = 'succeeded'
        state.hireSearch = payload
      })
      .addCase(getHireSearch.rejected, (state, { payload }) => {
        state.isLoading = false
        state.status = 'failed'
        state.error = payload
      })
  },
})

export default getHireSearchSlice.reducer
