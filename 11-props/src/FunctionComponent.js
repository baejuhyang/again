// 함수형 컴포넌트
// - 간단한 함수 형태로 컴포넌트 정의.
// - 간단한 문법, React Hooks 등 더 유용한 기능을 제공하기 때문에
//   함수형 컴포넌트를 사용하는 것이 권장됨.

// #4. PropTypes 활성화
import PropTypes from 'prop-types';

// 1) 함수 선언문 방식
// function FunctionComponent() {
//     return <h1>여기는 Function Component</h1>;
// }

// 2) 화살표 함수 방식
const FunctionComponent = ({ name = 'Sally', age = 24 }) => {
    // #1. 변수 선언
    const student = '춘향';
    // console.log('props >>> ', props);
    // #2-2. 구조분해 할당 (최신 방식)
    // const { name, age } = props;
    // #2-3. 매개변수에 직접 넣어서 구조분해할당 해도 됨! (매개변수에 props 대신 {name, age})

    // #3. defaultProps
    // #3-2. 매개변수 문법 활용
    // 매개변수에 {name = 'Sally', age = 28}
    // 구조분해할당을 하면서 기본값을 설정해 줄 수 있음.

    return (
        <>
            <h1>여기는 Function Component 화살표함수</h1>
            <h2>Hello, {student}</h2>

            {/* #2. Props 사용 */}
            {/* - 함수의 매개변수로 props를 받아 사용
                - props.xxx로 받아 사용 */}

            <p>
                {/* #2-1. 전체 Props로 넘겨줄 때. (구조분해 할당x) 
            함수의 매개변수에 props를 넣어준다.*/}
                {/* 새로운 리더의 이름은 <b>{props.name}</b>
                <br />
                나이는 <b>{props.age}</b> */}
                {/* #2-2. 개별적으로 가져올 때 (구조분해할당 o) */}
                새로운 리더의 이름은 <b>{name}</b>
                <br />
                나이는 <b>{age}</b>
            </p>
        </>
    );
};

// #3. defaultProps
// #3-1. 함수 외부에서 설정하는 방법
// FunctionComponent.defaultProps = {
//     name: 'Sally',
//     age: 24,
// };

// #4. proTypes 설정 - 함수 외부에서 설정 가능 (내부에서도 똑같이 작성할 수 있는데, 내부에서로는 잘 사용 안함)
FunctionComponent.propTypes = {
    name: PropTypes.string,
    // age: PropTypes.number.isRequired, // isRequired 충돌
    age: PropTypes.number,
};

// (!) 함수 외부 defaltProps와 충돌.
// - React 18 이후부터 함수형 컴포넌트에서 defaultProps 지원을 중단함.
// - 매개변수 문법 활용 방법이 있기 때문!
//  사용을 지양..!

// (!) 기본 매개변수 문법 사용 시 propTypes에서 isRequired 충돌.
// - 기본 메개변수를 사용하면 propTypes에서 isRequired를 제거하는 것이 일반적이다.
// - 기본값으로 설정되어 있기 때문에 isRequired를 하는 이유는 props가 안넘어와서 undefined를 ,
//   기본값을 설정한다면 기본으로 props 값을 제공하기 때문에 undefined될 가능성이 없으므로 isRequired가 불필요하다.

export default FunctionComponent;

// React 18부터 React.StrictMode가 기본적으로 활성화.
// index.js에서 확인 가능함.
// 이는 개발 모드에서 컴포넌트의 랜더링과 lifecycle메서드가 두 번 호출되도록 하여
// 부작용(side effects)을 테스트하고 식별하는데 도움을 줌.
// 이로 인해 console.log가 두 번 찌힐 수 있음.
