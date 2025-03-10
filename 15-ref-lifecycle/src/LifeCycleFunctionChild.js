import React, { useEffect, useState } from 'react';

export default function LifeCycleFunctionChild({ number }) {
    const [input, setInput] = useState('');
    // #1. Mount 시점에 실행 - return 생략
    useEffect(() => {
        console.log('🔵컴포넌트 마운트');
    }, []);

    // #2. Mount 시점에 실행 - return 있을 때
    useEffect(() => {
        console.log('🔵컴포넌트 마운트'); // 효과 함수: 마운트와 업데이트 시 실행할 코드 작성
        // 함수를 return 시 반환하는 함수가 unmount 시점에 실행이 됨
        return () => {
            console.log('🔴컴포넌트 언마운트'); // 정리 함수: 언마운트 또는 다음 useEffect 실행 전 호출
        };
    }, []); // 의존성 배열: 배열에 지정된 값이 변결될 때 효과 함수가 실행

    // #3. Mount or Update 시점에 실행 (의존성 배열 생략)
    useEffect(() => {
        console.log('🔵컴포넌트 마운트 or 🟢업데이트');
    });

    // 의존성 배열이 []빈 배열 이므로 #1, #2는 랜더링 시 "한번만" 실행
    // 의존성 배열을 생략하는 의미는 "매 랜더링마다 실행"하겠다 라는 뜻. (상태 변경마다)

    // #4. input 상태가 업데이트 될 때 실행
    useEffect(() => {
        console.log(
            '🔵컴포넌트 마운트 or 🟠input 상태가 변경됨에 따라 컴포넌트 업데이트'
        );

        // #4-1. 다음 useEffect 실행 전 호출
        return () => {
            console.log('🔴컴포넌트 언마운트');
            // update 전 실행됨.
            // - useEffect가 실행 될 때, 이전 효과가 남아 있으면 중복되 ㄴ효과가 발생할 수 있기 때문에,
            // - 이전 효과를 먼저 제거한 후 새로운 효과 적용을 하기 위함.
        };
    }, [input, number]);
    // input이 배열이 아니더라도 의존성 배열에 추가할 수 있다.
    // 문자열이든 숫자든 상관없이 이 값이 변결될 때마다 useEffect가 실행된다.

    // #5. 여러개의 useEffect
    // - 하나의 컴포넌트 안에 '여러 개의 useEffect'를 사용 가능
    // - 리액트는 각각의 useEffect를 독립적으로 관리함.
    return (
        <div>
            자식 컴포넌트 <div>현재 number값은 {number}입니다.</div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div>{input}</div>
        </div>
    );
}
