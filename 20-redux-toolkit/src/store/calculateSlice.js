import { createSlice } from '@reduxjs/toolkit';

const calculateSlice = createSlice({
    name: 'calculate',
    initialState: { total: 0 },
    reducers: {
        plus: (state, action) => {
            state.total += action.payload;
        },
        minus: (state, action) => {
            state.total -= action.payload;
        },
    },
});

export const { plus, minus } = calculateSlice.actions; // 액션 값 내보내기.
export default calculateSlice.reducer; // 리듀서 내보내기
