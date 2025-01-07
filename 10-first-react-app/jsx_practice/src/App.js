import './App.css';

// 실습1
// let name = '로이';
// let animal = '강아지';

// function App() {
//     return (
//         <div className="App">
//             <h2>제 반려 동물의 이름은 {name}입니다.</h2>
//             <h2>
//                 {name}는 {animal}입니다.
//             </h2>
//         </div>
//     );
// }
// export default App;

// 실습2
// 삼항 연산자를 사용하여 3 + 5 == 8 이란 수식이 맞으면 "정답입니다!" 를, 틀리면 "오답입니다!" 를 출력하도록 해주세요.
// function App() {
//     return (
//         <div className="App">
//             {3 + 5 == 8 ? <span>정답입니다!</span> : <span>오답입니다!</span>}
//         </div>
//     );
// }
// export default App;

// 실습3
// a라는 변수와 b라는 변수를 만들고 각각에 숫자(정수)를 넣어주세요. &&연산자를 이용하여 a가 b보다 크다면 "a가 b보다 큽니다"를 출력하도록 해주세요.
// let a = 9;
// let b = 4;

// function App() {
//     return <div className="App">{a > b && 'a가 b보다 큽니다'}</div>;
// }
// export default App;

// 실습4
// 1. App.css 를 만들어서 아래와 같이 적용되도록, css를 작성해주세요.
// 2. App.js 컴포넌트에 title 이라는 변수를 만들고 원하는 제목을 넣어주세요. Ex) Hello World
// 3. div, input 태그를 이용하여 다음 결과물처럼 만들어주세요.

function App() {
    const title = 'Hello World';
    return (
        <div className="App">
            <h1>{title}</h1>
            <label>아이디: </label>
            <input type="text"></input>
            <br />
            <br />
            <label>비밀번호: </label>
            <input type="text"></input>
        </div>
    );
}
export default App;
