import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from './store/calculateSlice';

export default function PracticeRedux() {
    const total = useSelector((state) => state.calculate.total);
    const dispatch = useDispatch();
    const [input, setInput] = useState(0);
    return (
        <div>
            <h1>코딩온 은행</h1>
            <h2>잔액: {total}원</h2>
            <input
                type="number"
                onChange={(e) => {
                    setInput(Number(e.target.value));
                }}
            />
            <button onClick={() => dispatch(plus(input))}>입금</button>
            <button onClick={() => dispatch(minus(input))}>출금</button>
        </div>
    );
}
