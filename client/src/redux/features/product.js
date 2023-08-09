import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    apiResponse: [],
    categoryList: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setApiResponse: (state, action) => {
            state.apiResponse = action.payload;
            state.categoryList = [...new Set(action.payload.map((product) => product.category))];
        }
    },
});

export const { setApiResponse } = productSlice.actions;
export default productSlice.reducer;
