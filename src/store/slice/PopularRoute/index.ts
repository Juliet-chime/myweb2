import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiRequest } from '../../api'
import apiRoutes from '../../apiRoutes'
import { PopularRouteProps } from './type'

const initialState: PopularRouteProps = {
  isLoading: false,
  status: 'idle',
  popularRoutes: [],
  error: [],
}

export const getPopularRoutes = createAsyncThunk('popularRoutes', async () => {
  try {
    const response = await apiRequest(apiRoutes.GetpopularRoute(), 'get', null)
    return response.data
  } catch (err) {
    return err
  }
})

export const getPopularRoutesSlice = createSlice({
  name: 'depatureTerminal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularRoutes.pending, (state) => {
        state.isLoading = true
        state.status = 'loading'
      })
      .addCase(getPopularRoutes.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.status = 'succeeded'
        state.popularRoutes = payload?.Object
      })
      .addCase(getPopularRoutes.rejected, (state, { payload }) => {
        state.isLoading = false
        state.status = 'failed'
        state.error = payload
      })
  },
})

export default getPopularRoutesSlice.reducer
