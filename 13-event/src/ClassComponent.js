// 클래스 컴포넌트에서의 이벤트 사용.
//  - 화살표 함수 사용 (ES6)

import React, { Component } from 'react';

export default class ClassComponent extends Component {
    /**
     * 화살표 함수의 'this'는 상위 스코프의 'this'를 참조하므로 바인딩이 필요 없음.
     * = Lexical this: 렉시컬 스코프의 this라고도 함.
     * -> 즉, 자신만의 this를 가지지 않는다.
     */

    // 필드 영역이기 때문에 const let 키워드 상관 없이 변수명만 사용하면 됨.
    printConsole = (msg, msg2, evt) => {
        // msg, msg2: 추가로 전달된 인자
        // evt: 이벤트 객체
        // - 리액트 이벤트 객체가 자동으로 첫 번재 인수로 들어가진다.
        // - 이벤트 객체가 마지막 매개변수로 오는 것이 일반적. (코드 작성 시)
        console.log('evt', evt);
        console.log('evt.target', evt.target);
        console.log('evt.currentTarget', evt.currentTarget);
        console.log('msg', msg);
        console.log('msg2', msg2);
        console.log('this', this); // this는 클래스 인스턴스를 참조함 // 화살표 함수가 아닌 상위 스코프인 class의 this를 참조하여 바인딩이 필요 없다.
        console.log('--------------');
    };

    render() {
        return (
            <>
                <div>ClassComponent</div>
                {/* 이벤트 객체와 인자 전달 */}
                <button
                    onClick={(e) => {
                        this.printConsole('msg', 'msg2', e);
                    }}
                >
                    printConsole (인자 O)
                </button>
                {/* 이벤트 객체만 전달 */}
                {/* 합성 이벤트는 리액트만의 기능으로 인자로 따로 넘겨주지 않아도 알아서 자동으로 이벤트 객체가 넘어가진다. (따로 함수로 e를 명시하지 않아도 사용 가능) */}
                <button onClick={this.printConsole}>
                    printConsloe (인자 X)
                </button>
            </>
        );
    }
}
