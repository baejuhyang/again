import React, { useState } from 'react';
import LifeCycleClassChild from './LifeCycleClassChild';
import LifeCycleFunctionChild from './LifeCycleFunctionChild';

// 부모 컴포넌트
export default function LifeCycleFunction() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(false);

    const changeNumber = () => {
        setNumber(number + 1);
    };
    const changeVisible = () => {
        setVisible(!visible);
    };
    return (
        <div>
            <button onClick={changeNumber}>Plus</button>
            <button onClick={changeVisible}>On / Off</button>
            {visible && <LifeCycleFunctionChild number={number} />}
            {/* 똑같이 통일하는 것이 관례 */}
        </div>
    );
}
