import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
	producer: null,
	producers : [],
	isError : false,
	isSuccess: false,
	isLoading: false,
	message:"",


}

const producerSlice = createSlice({
  name: "producer",
  initialState,
  reducers: {

  },
  extraReducers:(builder)=>{

  }
});

export const {} = producerSlice.actions

export default producerSlice.reducer