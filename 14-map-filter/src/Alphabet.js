import React, { useState } from 'react';

export const Alphabet = () => {
    // 배열 ex
    // const [alphabet, setAlphabet] = useState(['D', 'e', 'm', 'o', 'n']);

    // 배열 안에는 객체 ex
    const [alphabet, setAlphabet] = useState([
        { id: 1, alpha: 'a' },
        { id: 2, alpha: 'p' },
        { id: 3, alpha: 'p' },
        { id: 4, alpha: 'l' },
        { id: 5, alpha: 'e' },
    ]);

    // input 데이터 상태 관리
    const [inputAlpha, setInputAlpha] = useState('');

    // 글자 추가 기능
    const addAlpha = () => {
        // input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기

        if (inputAlpha.trim().length === 0) {
            // inputAlpha === ''
            alert('알파벳을 입력하세요');
            return;
        }
        // concat
        // - 배열, 문자열을 결합하는데 사용되는 메서드.
        // - 기존 배열, 문자열을 변경하지 않고, 주어진 배열이나 값들을 '새로운' (배열이나 문자열로) 결합하여 반환.
        const newAlpha = alphabet.concat({
            id: alphabet.length + 1,
            alpha: inputAlpha,
        });

        setAlphabet(newAlpha);
        setInputAlpha('');
    };

    // #2. 키보드 이벤트
    const handleKeyDown = (e) => {
        /**
         * (!) 한글 입력 시, 2개씩 입력되는 현상.
         * - IME(입력기) 사용 시 발생하는 현상.
         * ㄴ문자의 조합이 필요한 언어에서 일어나는 현상.
         * - e.nativeEvent.isComposing
         * ㄴnative 이벤트객체이 있는 속성, 리액트의 합성이벤트에는 없는 메소드.
         * : 입력 중인 상태를 나타내는 속성.
         * - 즉, e.nativeEvent.isComposing === true : 사용자가 IME로 아직 문자 입력 중
         * e.nativeEvent.isComposing === false : 입력이 확정되어 최종 문자로 처리 가능 상태
         */

        if (e.nativeEvent.isComposing) return; // IME 입력 중일 때는 처리하지 않는다.

        if (e.code === 'Enter') {
            addAlpha();
        }

        if (e.keyCode === 13) {
            addAlpha();
        }
    };

    // #3. 글자 삭제 기능
    const deleteAlpha = (targetId) => {
        console.log(targetId); // targetId: 더블클릭 하여 삭제될 요소의 key id

        // 삭제할 ID와 일치하지 않는 애들로 새로운 배열 생성성
        const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
        setAlphabet(newAlpha);
        console.log(alphabet);
    };

    // #4. 이벤트 위임 방식
    const handleDobuleClick = (e) => {
        // 이벤트 핸들러가 ol 요소에 설정되어 있기 때문에,
        // - 이벤트 위임을 통해 이벤트가 발생한 실제 요소가 무엇인지 확인하고,
        // - li 태그인 경우에만 삭제 기능을 실행토록 하기 위함.

        // 이벤트가 발생한 요소가 li 태그인지 확인.
        if (e.target.tagName === 'LI') {
            console.log('target', e.target);
            console.log(e.target.id); // 발생된 e.target의 id 가져오기
            console.log(typeof e.target.id); // string
            const targetId = Number(e.target.id);
            // id 속성으로 가져오는 값은 "문자열"로 반환
            deleteAlpha(targetId);
        }
    };
    return (
        <>
            <h1>map & filter</h1>
            <ol>
                {/* 배열 ex */}
                {/* return 키워드 O */}
                {/* {alphabet.map((value, idx) => {
                    return <li key={idx}>{value}</li>;
                })} */}
                {/* return 키워드 X, 중괄호 X */}
                {/* {alphabet.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))} */}

                {/* 배열 안에 객체 ex */}
                {alphabet.map((value) => (
                    <li key={value.id}>{value.alpha}</li> // .접근법으로 속성에 접근
                ))}
            </ol>

            {/* #1. 알파벳 추가하기 기능 */}
            <input
                type="text"
                placeholder="알파벳 입력"
                value={inputAlpha}
                onChange={(e) => setInputAlpha(e.target.value)}
                // input에서 Enter키 누르면 추가되도록
                // #2. 키보드 이벤트 핸들러
                onKeyDown={handleKeyDown}
            />
            <button onClick={addAlpha}>ADD</button>

            {/* #3. 알파벳 삭제하기 기능 */}
            {/* <ol>
                {alphabet.map((value) => (
                    <li
                        key={value.id}
                        onDoubleClick={() => deleteAlpha(value.id)}
                    >
                        {value.alpha}
                    </li>
                ))}
            </ol> */}

            {/* #4. "이벤트 위임" 방식 적용 - 효율성 증가! */}
            <ol onDoubleClick={handleDobuleClick}>
                {alphabet.map((value) => (
                    <li key={value.id} id={value.id}>
                        {/* key가 있는데 id를 쓴 이유: key는 리액트에만 있는 속성으로 브라우저가 읽지 못함. id 속성은 브라우저가 갖고 있는 속성이기 때문에 dom이 읽을 수 있다. */}
                        {value.alpha}
                    </li>
                ))}
            </ol>
        </>
    );
};

//  *concat 예제
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]
