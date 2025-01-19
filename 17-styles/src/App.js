import './App.css';
import BasicCss from './components/BasicCss';
import CssModuleComponents from './components/CssModuleComponents';
import { PracticeLifeCycle } from './components/Practice/PracticeLifeCycle';
import PracticeStyles from './components/PracticeStyles';
import SassComponent from './components/SassComponent';
import StyledComponent from './components/StyledComponent';

function App() {
    return (
        <div className="App">
            {/* <BasicCss></BasicCss> */}
            {/* <CssModuleComponents></CssModuleComponents> */}
            {/* <SassComponent></SassComponent> */}
            {/* <StyledComponent></StyledComponent> */}

            {/* 실습 */}
            <PracticeStyles></PracticeStyles>
            {/* <PracticeLifeCycle></PracticeLifeCycle> */}
        </div>
    );
}

export default App;
