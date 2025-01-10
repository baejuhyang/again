import React, { Component } from 'react';

export default class RefSample4 extends Component {
    // 컴포넌트 내부에서 변수에 React.createFef()를 담기.
    // #1. Ref 객체 생성
    inputRef = React.createRef();

    handleFocus = () => {
        // console.log(this); // 클래스 인스턴스를 참조
        // console.log(this.inputRef); // {current: input}
        // console.log(this.inputRef.current); // <input />

        this.inputRef.current.focus();
    };

    render() {
        console.log(this.inputRef);

        return (
            <div>
                <p>클래스형 컴포넌트에서 버튼 클릭 시 input에 focusing 처리</p>
                {/* #2. ref prop 사용해서 this.inputRef에 참조 연결 */}
                <input type="text" ref={this.inputRef} />
                <button onClick={this.handleFocus}>Focus</button>
            </div>
        );
    }
}
