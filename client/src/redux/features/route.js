import { createSlice } from "@reduxjs/toolkit";
import { routes } from "./../data/routes";

// Create a slice for routes
const routeSlice = createSlice({
    name: "routes",
    initialState: routes,
    reducers: {},
});

// Export the route reducer
export default routeSlice.reducer;
