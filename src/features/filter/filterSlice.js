const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  search: "",
  featured: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterBySearch: (state, action) => {
      state.search = action.payload;
    },
    filterByFeatured: (state, action) => {
      state.featured = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { filterBySearch, filterByFeatured } = filterSlice.actions;
