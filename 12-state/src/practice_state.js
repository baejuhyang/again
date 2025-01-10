// 실습1 클래스형 컴포넌트
// import React, { Component } from 'react';
// export default class StateClassComponent extends Component {
//     state = {
//         number: 0,
//     };

//     render() {
//         const { number } = this.state;
//         return (
//             <>
//                 <h1>{number}</h1>
//                 <button
//                     onClick={() => {
//                         this.setState({ number: number + 2 });
//                     }}
//                 >
//                     +2
//                 </button>
//                 <button
//                     onClick={() => {
//                         this.setState({ number: number - 1 });
//                     }}
//                 >
//                     -1
//                 </button>
//             </>
//         );
//     }
// }

// 실습2 함수형 컴포넌트
export const StateFunctionComponent = () => {
    const [number, setNumber] = useState(0);
    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        setNumber(number - 2);
    };

    return (
        <>
            <h1>{number}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-2</button>
        </>
    );
};
