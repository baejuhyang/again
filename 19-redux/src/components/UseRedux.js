import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from '../store/actions/counterActions';

export default function UseRedux() {
    // #7. useSelector hook 사용하여 Redux 스토어에서 상태 읽어오기
    const count = useSelector((state) => state.count);
    console.log('count', count);

    return (
        <div>
            <h1>UseRedux</h1>
            <h2>Redux 사용!</h2>
            <h2>count :{count} </h2>
            <Box1></Box1>
        </div>
    );
}

// Box1 컴포넌트
const Box1 = ({ number, plus, minus }) => {
    return (
        <div className="Box">
            <h2>Box1 : {number}</h2>
            <Box2 />
        </div>
    );
};

// Box2 컴포넌트
const Box2 = () => {
    return (
        <div className="Box2">
            <h2>Box2 : </h2>
            <Box3 />
        </div>
    );
};

// Box3 컴포넌트
const Box3 = () => {
    return (
        <div className="Box3">
            <h2>Box3 : </h2>
            <Box4 />
        </div>
    );
};

// Box4 컴포넌트 // data를 사용할 컴포넌트
const Box4 = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    return (
        <div className="Box4">
            <h2>Box4 : {count} </h2>
            <button onClick={() => dispatch(plus())}>Plus</button>
            <button onClick={() => dispatch(minus())}>Minus</button>
            {/* 함수를 ()호출하여 액션 객체를 반환하고 {type: XXX},  */}
            {/* 그래야 dispatch()가 반환된 액션 객체를 */}
        </div>
    );
};
