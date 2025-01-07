// 함수형 컴포넌트 State
import React, { useState } from 'react';

export const CounterFunction = ({ value }) => {
    /**
     * const [a, b] = useState(''); 형태
     * a: state에 저장할 자료.
     * b: state 변경을 도와주는 함수.
     * useState(''): 상태 초기값, (숫자, 문자, 배열 등 값의 형태는 자유로움)
     * */

    const [number, setNumber] = useState(0); // 괄호 안의 값은 초기값. 현재는 (초기값) = 0
    // number: 상태 값
    // setNumber: 상태를 변경하는 함수

    // state 값 변경하기.
    const onClickAdd = () => {
        setNumber(number + 1);
    };
    return (
        <>
            <div>CounterFunction</div>
            <h1>Number : {number}</h1>
            <button onClick={onClickAdd}>{value}</button>
        </>
    );
};
