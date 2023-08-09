import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './features/auth';
import routeReducer from './features/route';
import productReducer from "./features/product";

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    routes: routeReducer,
    products: productReducer,
});

// Create the Redux store with the combined reducers
const store = configureStore({
    reducer: rootReducer,
});

export default store;