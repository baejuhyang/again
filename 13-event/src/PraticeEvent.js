// 실습1
// import React, { Component } from 'react';

// export default class PraticeEvent extends Component {
//     state = {
//         message: 'Hello World!',
//     };

//     render() {
//         const { message } = this.state;

//         return (
//             <>
//                 <h1>{message}</h1>
//                 <button
//                     onClick={() => {
//                         this.setState({ message: 'Goodbye World!' });
//                     }}
//                 >
//                     클릭
//                 </button>
//             </>
//         );
//     }
// }

// 실습2
// import React, { Component } from 'react';

// export default class PraticeEvent extends Component {
//     state = {
//         message: '검정색 글씨',
//         color: 'black',
//     };

//     render() {
//         const { message, color } = this.state;
//         return (
//             <>
//                 <h1 style={{ color }}>{message}</h1>
//                 <button
//                     onClick={() => {
//                         this.setState({
//                             message: '빨간색 글씨',
//                             color: 'red',
//                         });
//                     }}
//                 >
//                     빨간색
//                 </button>
//                 <button
//                     onClick={() => {
//                         this.setState({
//                             message: '파란색 글씨',
//                             color: 'blue',
//                         });
//                     }}
//                 >
//                     파란색
//                 </button>
//             </>
//         );
//     }
// }

// 실습3
// 방법1
// import React, { useState } from 'react';
// export const PraticeEvent = () => {
//     const [msg, setMsg] = useState('사라져라');
//     const [currentDisplay, setDisplay] = useState('block');

//     const onClickChange = () => {
//         if (msg === '사라져라') {
//             setMsg('보여라');
//             setDisplay('none');
//         } else {
//             setMsg('사라져라');
//             setDisplay('block');
//         }
//     };

//     return (
//         <>
//             <button onClick={onClickChange}>{msg}</button>
//             <h2 style={{ display: currentDisplay }}>안녕하세요</h2>
//         </>
//     );
// };

// 답안) 단축평가를 이용하기
// import React, { useState } from 'react';
// export const PraticeEvent = () => {
//     let [display, setDisplay] = useState(true);

//     const changeDisplay = () => {
//         setDisplay(!display);
//     };

//     return (
//         <>
//             <button onClick={setDisplay}>
//                 {display ? '사라져라' : '보여라'}
//             </button>
//             {display && <h4>안녕하세요</h4>}{' '}
//             {/* display가 true일 때 <h4>를 반환 */}
//         </>
//     );
// };

// 종합실습
// import React, { useState } from 'react';

// export const PraticeEvent = () => {
//     const [image, setImage] = useState('apple.png');
//     const [currentBack, setBack] = useState('black');
//     const [currentColor, setColor] = useState('white');
//     const [msg, setMsg] = useState('text');

//     const changeImg = (e) => {
//         setImage(e.target.value);
//     };
//     const changeBack = (e) => {
//         setBack(e.target.value);
//     };
//     const changeColor = (e) => {
//         setColor(e.target.value);
//     };
//     const printInputValue = (e) => {
//         setMsg(e.target.value);
//     };

//     return (
//         <>
//             <label htmlFor="">과일 : </label>
//             <select name="" id="" onChange={changeImg}>
//                 <option value="apple.png"/>
//                     사과
//                 </option>
//                 <option value="banana.png">
//                     바나나
//                 </option>
//                 <option value="peach.png">
//                     복숭아
//                 </option>
//                 <option value="orange.png">
//                     오렌지
//                 </option>
//             </select>
//             <label htmlFor="">배경색 : </label>
//             <select name="" id="" onChange={changeBack}>
//                 <option value="black">검정</option>
//                 <option value="white">하양</option>
//                 <option value="red">빨강</option>
//                 <option value="orange">주황</option>
//                 <option value="yellow">노랑</option>
//                 <option value="green">초록</option>
//                 <option value="blue">파랑</option>
//                 <option value="purple">보라</option>
//                 <option value="pink">분홍</option>
//             </select>
//             <label htmlFor="">글자색 : </label>
//             <select name="" id="" onChange={changeColor}>
//                 <option value="black">검정</option>
//                 <option value="white">하양</option>
//                 <option value="red">빨강</option>
//                 <option value="orange">주황</option>
//                 <option value="yellow">노랑</option>
//                 <option value="green">초록</option>
//                 <option value="blue">파랑</option>
//                 <option value="purple">보라</option>
//                 <option value="pink">분홍</option>
//             </select>
//             <br />
//             <label htmlFor="">내용 : </label>
//             <input
//                 type="text"
//                 placeholder="내용을 입력하세요."
//                 onChange={printInputValue}
//             />
//             <br />
//             <img src={image} alt="" />
//             <p style={{ background: currentBack, color: currentColor }}>
//                 {msg}
//             </p>
//         </>
//     );
// };

// 종합실습 해답
// 방법1) 상태 관리를 따로따로 하는 방법
import React, { useState } from 'react';

export const PraticeEvent = () => {
    const [fruit, setFruit] = useState('peach.png');
    const [bgc, setBgc] = useState('red');
    const [color, setColor] = useState('black');
    const [text, setText] = useState('');

    const fruitChange = (e) => {
        setFruit(e.target.value);
    };
    const bgcChange = (e) => {
        setBgc(e.target.value);
    };
    const colorChange = (e) => {
        setColor(e.target.value);
    };
    function Typing(e) {
        setText(e.target.value);
    }

    return (
        <>
            <div>
                과일:
                <select onChange={fruitChange}>
                    <option value="peach.png">복숭아</option>
                    <option value="apple.png">사과</option>
                    <option value="banana.png">바나나</option>
                </select>
                배경색:
                <select onChange={bgcChange}>
                    <option value="red">빨강</option>
                    <option value="yellow">노랑</option>
                    <option value="blue">파랑</option>
                </select>
                글자색:
                <select onChange={colorChange}>
                    <option value="black">검정</option>
                    <option value="red">빨강</option>
                    <option value="yellow">노랑</option>
                </select>
            </div>
            <div>
                내용: <input type="text" onChange={Typing} />
            </div>
            <div>
                <img src={fruit} alt="" width={200} height={200} />
                {/* 이미지는 public 폴더에 있는 것으로 사용했음 */}
            </div>
            <div style={{ backgroundColor: bgc, color: color }}>{text}</div>
        </>
    );
};

// 방법2) 상태 관리를 한번에 하는 방법
// import React, { useState } from 'react';
// import Select from './Select';
// import Input from './Input';
// import Result from './Result';

// // 부모 컴포넌트
// export const PraticeEvent = () => {
//     // #1. 초기값 설정
//     const [data, setData] = useState({
//         fruit: 'apple',
//         background: 'black',
//         color: 'white',
//         content: 'text',
//     });

//     return (
//         <>
//             {/* props를 넘겨줄건데, setData 함수를 넘겨줘야 state 변경이 가능 */}
//             <div>
//                 <Select setData={setData}></Select>
//             </div>
//             <div>
//                 <Input setData={setData}></Input>
//             </div>
//             <div>
//                 <Result data={data}></Result>
//             </div>
//         </>
//     );
// };
