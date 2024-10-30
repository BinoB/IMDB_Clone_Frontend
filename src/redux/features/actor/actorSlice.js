import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import actorService from "./actorService";
import { toast } from "react-toastify";

const initialState = {
  actor: null,
  actors: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  totalExpenseValue: 0,
  category: [],
}; 

// Create New Actor
export const createActor = createAsyncThunk(
  "actors/create",
  async (formData, thunkAPI) => {
    try {
      return await actorService.createActor(formData);
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

// Get all actors
export const getActors = createAsyncThunk(
  "actors/getAll",
  async (_, thunkAPI) => {
    try {
      return await actorService.getActors();
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

// Delete a Actor
export const deleteActor = createAsyncThunk(
  "actors/delete",
  async (id, thunkAPI) => {
    try {
      return await actorService.deleteActor(id);
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

// Get a actor
export const getActor = createAsyncThunk(
  "actors/getActor",
  async (id, thunkAPI) => {
    try {
      return await actorService.getActor(id);
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
// Update actor
export const updateActor = createAsyncThunk(
  "actors/updateActor",
  async ({ id, formData }, thunkAPI) => {
    try {
      return await actorService.updateActor(id, formData);
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

const actorSlice = createSlice({
  name: "actor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createActor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createActor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.actors.push(action.payload);
        toast.success("Actor added successfully");
      })
      .addCase(createActor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getActors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getActors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.actors = action.payload;
      })
      .addCase(getActors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteActor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteActor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Actor deleted successfully");
      })
      .addCase(deleteActor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getActor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getActor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.actor = action.payload;
      })
      .addCase(getActor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateActor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateActor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Actor updated successfully");
      })
      .addCase(updateActor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const selectIsLoading = (state) => state.actor.isLoading;
export const selectActor = (state) => state.actor.actor;

export default actorSlice.reducer;
