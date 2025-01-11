import React, { useRef, useState } from 'react';

export default function RefSample2() {
    const id = useRef(7);
    console.log('id', id); // {current: 7}

    const plusIdRef = () => {
        id.current += 1; // current 값을 직접 수정
        console.log(id.current); // 값 증가 확인
    };

    const [number, setNumber] = useState(7);
    const PlusNumState = () => {
        setNumber(number + 1);
    };

    return (
        <div>
            <p>함수형 컴포넌트에서 버튼 클릭 시 id 값을 1씩 증가</p>
            <h1>Ref</h1>
            <h2>{id.current}</h2>
            <button onClick={plusIdRef}>Plus ref</button>
            <hr />
            <p>비교) state는 ref와 다르게 값이 변경되면 리렌더링 된다.</p>
            <h1>State</h1>
            <h2>{number}</h2>
            <button onClick={PlusNumState}>Plus</button>
        </div>
    );
}
