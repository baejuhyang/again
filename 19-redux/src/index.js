import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'; // Redux 스토어 가져오기 // index.js는 생략 가능

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* #6. React와 Redux 연결 */}
        {/* 
            Provider
            - Redux 스토어 공유
            ㄴ 하위 모든 컴포넌트가 Redux 스토어에 접근 가능
            - 최사위 컴포넌트에서 사용해야 한다.
         */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// 홍보한 후에는 사용하기
