import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import rootReducer from './reducers';
// #5. 스토어 생성
// - createStore 사용
// - 리듀서와 미들웨어 결합하여 설정

// [단일 리듀서] 일 때,
// const store = createStore(counterReducer);
// export default store;

// #5-2. 스토어 생성
// [여러개의 리듀서]
const store = createStore(rootReducer);
export default store;

// 이제 리듀서와 리액트 연결하기 -> provider
