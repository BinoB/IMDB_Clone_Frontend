/* import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import producerService from "./ProducerService";
import { toast } from "react-toastify";

const initialState = {
  producer: null,
  producers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  totalExpenseValue: 0,
  category: [],
};

// Create New Producer
export const createProducer = createAsyncThunk(
  "producers/create",
  async (formData, thunkAPI) => {
    try {
      return await producerService.createProducer(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all producers
export const getProducers = createAsyncThunk(
  "producers/getAll",
  async (_, thunkAPI) => {
    try {
      return await producerService.getProducers();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete a Producer
export const deleteProducer = createAsyncThunk(
  "producers/delete",
  async (id, thunkAPI) => {
    try {
      return await producerService.deleteProducer(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get a producer
export const getProducer = createAsyncThunk(
  "producers/getProducer",
  async (id, thunkAPI) => {
    try {
      return await producerService.getProducer(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Update producer
export const updateProducer = createAsyncThunk(
  "producers/updateProducer",
  async ({ id, formData }, thunkAPI) => {
    try {
      return await producerService.updateProducer(id, formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const producerSlice = createSlice({
  name: "producer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProducer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProducer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.producers.push(action.payload);
        toast.success("Producer added successfully");
      })
      .addCase(createProducer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getProducers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.producers = action.payload;
      })
      .addCase(getProducers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteProducer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProducer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Producer deleted successfully");
      })
      .addCase(deleteProducer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getProducer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.producer = action.payload;
      })
      .addCase(getProducer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateProducer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProducer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Producer updated successfully");
      })
      .addCase(updateProducer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const selectIsLoading = (state) => state.producer.isLoading;
export const selectProducer = (state) => state.producer.producer;

export default producerSlice.reducer;
 */