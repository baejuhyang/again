import './App.css';
import Faq from './components/Faq';
import { DisplayName } from './components/PracticeDisplayName';
import UserNameProvider from './components/PracticeHooks';
import TodoApp from './components/PracticeHooks';
import ShoppingCartApp from './components/PracticeHooks';
import ProductFilter from './components/PracticeHooks';
import { NameInput } from './components/PracticeNameInput';
import { ThemeMiddle } from './components/ThemeMiddle';
import { ThemeProvider } from './components/ThemeProvider';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';
import UserNameContext from './context/UserNameContext';
import useTitle from './hooks/useTitle';

function App() {
    useTitle('React Hooks 학습중!');
    return (
        <div className="App">
            {/* <UseMemoEx></UseMemoEx> */}
            {/* <UseCallbackEx></UseCallbackEx> */}
            <UseCallbackEx2 postId={7}></UseCallbackEx2>
            {/* <UseReducerEx></UseReducerEx> */}
            {/* <ThemeProvider>
                <ThemeMiddle></ThemeMiddle>
                <ThemeMiddle></ThemeMiddle>
            </ThemeProvider> */}
            {/* <Faq></Faq> */}

            {/* 실습 */}
            {/* <ProductFilter></ProductFilter> */}
            {/* <ShoppingCartApp></ShoppingCartApp> */}
            {/* <TodoApp></TodoApp> */}
            {/* <UserNameProvider>
                <DisplayName></DisplayName>
                <NameInput></NameInput>
            </UserNameProvider> */}
        </div>
    );
}

export default App;
