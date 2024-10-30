import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import movieService from "./movieService";


const initialState = {
  movie: null,
  movies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  totalExpenseValue: 0,
  category: [],
}; 

// Create New Movie
export const createMovie = createAsyncThunk(
  "movies/create",
  async (formData, thunkAPI) => {
    try {
      return await movieService.createMovie(formData);
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

// Get all movies
export const getMovies = createAsyncThunk(
  "movies/getAll",
  async (_, thunkAPI) => {
    try {
      return await movieService.getMovies();
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

// Delete a Movie
export const deleteMovie = createAsyncThunk(
  "movies/delete",
  async (id, thunkAPI) => {
    try {
      return await movieService.deleteMovie(id);
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

// Get a movie
export const getMovie = createAsyncThunk(
  "movies/getMovie",
  async (id, thunkAPI) => {
    try {
      return await movieService.getMovie(id);
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
// Update movie
export const updateMovie = createAsyncThunk(
  "movies/updateMovie",
  async ({ id, formData }, thunkAPI) => {
    try {
      return await movieService.updateMovie(id, formData);
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

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.movies.push(action.payload);
        toast.success("Movie added successfully");
      })
      .addCase(createMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Movie deleted successfully");
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.movie = action.payload;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Movie updated successfully");
      })
      .addCase(updateMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const selectIsLoading = (state) => state.movie.isLoading;
export const selectMovie = (state) => state.movie.movie;

export default movieSlice.reducer;
