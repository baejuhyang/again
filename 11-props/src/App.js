import ClassComponent from './ClassComponent.js';
import FoodComponent from './practice_props.js';
import BookComponent from './practice_props.js';
import ClassComponentPractice from './practice_props.js';
// import './App.css';
import FunctionComponent from './FunctionComponent.js';
import Button from './Button.js';
import MultiChild from './MultiChild.js';

function App() {
    return (
        <div className="App">
            {/* Class Component */}
            {/* <ClassComponent></ClassComponent>
            <hr />
            <ClassComponent place="새싹 강동캠퍼스 5층"></ClassComponent>
            <hr /> */}

            {/* Function Component */}
            {/* <FunctionComponent></FunctionComponent>
            <hr />
            <FunctionComponent name="john" age={30}></FunctionComponent>
            <hr /> */}
            {/* JSX에서 JS 표현식을 평가하는 용도로 사용하는 게 {} 
            -> {}로 감싸야 React가 이것을 JS 숫자로 인식함. */}

            {/* children - 단일 자식 요소 전달 */}
            <Button link="https://www.google.com">Google</Button>
            <Button></Button>
            <hr />

            {/* children - 다중 자식 요소 전달 */}
            <MultiChild>
                <b>다중 자식</b>
                <p>요소 전달</p>
                <div>체험해보기</div>
            </MultiChild>

            {/* props 실습1 */}
            {/* <FoodComponent></FoodComponent>
            <hr /> */}

            {/* props 실습2 */}
            {/* <BookComponent></BookComponent> */}

            {/* prop 실습3 */}
            {/* <ClassComponentPractice text="App 컴포넌트에서 넘겨준 text props 입니다."></ClassComponentPractice>
            <hr></hr>
            <ClassComponentPractice></ClassComponentPractice> */}
        </div>
    );
}

export default App;
