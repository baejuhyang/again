import { createSlice } from '@reduxjs/toolkit';

const isVisbleSlice = createSlice({
    name: 'isVisible',
    initialState: true,
    reducers: {
        change: (state) => !state,
    },
});

export const { change } = isVisbleSlice.actions;
export default isVisbleSlice.reducer;
