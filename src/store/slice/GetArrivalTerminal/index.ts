import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiRequest } from '../../api'
import apiRoutes from '../../apiRoutes'
import { ArrivalProps } from './type'

const initialState: ArrivalProps = {
  isLoading: false,
  status: 'idle',
  arrivalTerminal: [],
  error: [],
}

export const getArrivalTerminal = createAsyncThunk('arrivalTerminal', async (value: any) => {
  try {
    const response = await apiRequest(apiRoutes.ArrivalTerminals(value), 'get', null)
    return response.data
  } catch (err) {
    return err
  }
})

export const getArrivalTerminalSlice = createSlice({
  name: 'arrivalTerminal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArrivalTerminal.pending, (state) => {
        state.isLoading = true
        state.status = 'loading'
      })
      .addCase(getArrivalTerminal.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.status = 'succeeded'
        state.arrivalTerminal = payload.Object
      })
      .addCase(getArrivalTerminal.rejected, (state, { payload }) => {
        state.isLoading = false
        state.status = 'failed'
        state.error = payload
      })
  },
})

export default getArrivalTerminalSlice.reducer
