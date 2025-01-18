// // #1. Slice 객체 정의
// // * createSlice 함수 사용
// // - 리듀서와 액션 생성자를 한 번에 정의 할 수 있게 됨. (리듀서 + 액션)

// import { createSlice } from '@reduxjs/toolkit';

// // - name: 슬라이스의 이름 정의 / 액션 타입의 네임스페이스로 사용
// // - initialState: 상태 초기값 정의
// // - reducers: 상태를 업데이트하는 리듀서 함수 정의
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: { count: 100 },
//     reducers: {
//         // plus 가 자동으로 counter/plus 값을 가짐 -> 상수정의를 따로 하지 않아도 됨됨
//         plus: (state) => {
//             state.count += 1; // 직접 상태 값 변경 (하는 것처럼 보이지만 Redux Toolkit immer 라이브러리가 내부적으로 사용됨 -> 실제로는 불변성을 유지하면서 상태를 업데이트 함)
//         },
//         minus: (state) => {
//             state.count -= 1;
//         },
//         amount: (state, action) => {
//             state.count += action.payload; // 액션의 payload 사용
//         },
//     },
// });

// export const { plus, minus, amount } = counterSlice.actions; // 액션 값 내보내기.
// export default counterSlice.reducer; // 리듀셔 내보내기 // reducers가 아님! counterSlsice객체의 reducer로 들어가는 것임

import { createSlice } from '@reduxjs/toolkit';
// #1. Slice 객체 정의
// * createSlice 함수 사용
// - 리듀서와 액션 생성자를 한 번에 정의 할 수 있게 됨. (리듀서 + 액션)

/**
 * - name: 슬라이스의 이름 정의 / 액션 타입의 네임스페이스로 사용
 * - initialState : 상태 초기값 정의
 * - reducers : 상태를 업데이트 하는 리듀서 함수 정의
 */
const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 100 },
    reducers: {
        plus: (state) => {
            state.count += 1; // 직접 상태 값 변경 (Redux Toolkit immer 라이브러리가 내부적으로 사용됨)
        },
        minus: (state) => {
            state.count -= 1;
        },
        amount: (state, action) => {
            state.count += action.payload; // 액션의 payload 사용
        },
    },
});
console.log('counterSlice >>>> ', counterSlice);

export const { plus, minus, amount } = counterSlice.actions; // 액션 값 내보내기.

export default counterSlice.reducer; // 리듀서 내보내기
