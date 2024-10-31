/* import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredActors: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_ACTORS(state, action) {
      const { actors, search } = action.payload;
      const tempActors = actors.filter(
        (actor) =>
          actor.name.toLowerCase().includes(search.toLowerCase()) ||
          actor.category.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredActors = tempActors;
    },
  },
});

export const { FILTER_ACTORS } = filterSlice.actions;

export const selectFilteredActors = (state) => state.filter.filteredActors;

export default filterSlice.reducer; */


// Redux Slice: filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredActors: [], // Default to an empty array
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_ACTORS(state, action) {
      const { actors, search } = action.payload;
      const tempActors = actors.filter(
        (actor) =>
          actor.name.toLowerCase().includes(search.toLowerCase()) ||
          actor.category.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredActors = tempActors;
    },
  },
});

export const { FILTER_ACTORS } = filterSlice.actions;
export const selectFilteredActors = (state) => state.filter.filteredActors || [];
export default filterSlice.reducer;
