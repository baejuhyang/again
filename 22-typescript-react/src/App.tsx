import React from 'react';
import First from './components/First';
import Parents from './components/Parents';
import TodoList from './components/TodoList';
import PostList from './practice/PostList';

function App() {
    return (
        <div className="App">
            {/* <First title="오늘 배운 내용은?">
                <p>Ts with React</p>
            </First> */}
            {/* <Parents></Parents> */}
            <TodoList></TodoList>

            {/* 실습 */}
            {/* <PostList></PostList> */}
        </div>
    );
}

export default App;
