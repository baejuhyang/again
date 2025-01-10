import './App.css';
import CounterClass from './CounterClass';
import { CounterFunction } from './CounterFunction';
import { SayFunction } from './SayFunction';
import StateClassComponent from './practice_state';
import { StateFunctionComponent } from './practice_state';

function App() {
    return (
        <div className="App">
            {/* <CounterClass></CounterClass> */}
            <hr />
            {/* <CounterFunction value={'Plus 1'}></CounterFunction> */}
            <hr />
            {/* <SayFunction></SayFunction> */}

            {/* 실습 */}
            <StateClassComponent></StateClassComponent>
            {/* <StateFunctionComponent></StateFunctionComponent> */}
        </div>
    );
}

export default App;
