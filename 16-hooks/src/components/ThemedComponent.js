import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import useTheme from '../hooks/useTheme';
// 자식 컴포넌트 (데이터를 소비)

export const ThemedComponent = () => {
    // #4. useContext 훅을 사용하여 ThemeContext 값 직접 가져와서 사용.
    const { theme, toggleTheme } = useContext(ThemeContext);
    // const { theme, toggleTheme } = useTheme(); // 만들어 놓은 useTheme 훅 사용
    return (
        <div
            style={{
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                padding: '20px',
                textAlign: 'center',
                border: '1px solid pruple',
            }}
        >
            <h3>자식 컴포넌트</h3>
            <p>현재 테마 : {theme}</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
};
