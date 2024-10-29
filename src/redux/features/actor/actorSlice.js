import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'

const initialState = {
  actor: null,
  actors: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

const actorSlice = createSlice({
  name: actor,
  initialState,
  reducers: {}
});

export const {} = actorSlice.actions

export default actorSlice.reducer