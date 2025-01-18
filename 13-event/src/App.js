import './App.css';
import ClassComponent from './ClassComponent';
import { FuncComponent } from './FuncComponent';
import { PraticeEvent } from './PraticeEvent';
// import PraticeEvent from './PraticeEvent';
import SyntheticEvent from './SyntheticEvent';

function App() {
    return (
        <div className="App">
            {/* <SyntheticEvent></SyntheticEvent> */}
            <hr />
            {/* <FuncComponent></FuncComponent> */}
            <hr />
            {/* <ClassComponent></ClassComponent> */}

            {/* 실습 */}
            <PraticeEvent></PraticeEvent>
        </div>
    );
}

export default App;
