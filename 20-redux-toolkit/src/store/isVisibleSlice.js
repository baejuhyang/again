import { createSlice } from '@reduxjs/toolkit';

// #1. 슬라이스 정의
const isVisbleSlice = createSlice({
    name: 'isVisible',
    initialState: true,
    reducers: {
        change: (state) => {
            return !state;
        },
    },
});

// 액션 생성자, 리듀서를 내보내기
export const { change } = isVisbleSlice.actions;
export default isVisbleSlice.reducer;
