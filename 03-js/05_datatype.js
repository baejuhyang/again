// 자료형 (data types)
// Q) 데이터 (변수)의 종류가 무엇인가?
// - Primitive(원시 타입) : string, number, boolean, undefined, null, ...
// - Object(객체 타입) : Primitive 타입이 아닌 나머지

// #1. string (문자열)
// - 텍스트 정보, 따옴표로 감싸야 함.
// - 숫자, 특수문자도 따옴표 안에 포함 되어있다면? -> 문자열
// ex) '1', '$'

let text = '안녕하세요!';
let text2 = '하이!';
let gender = '남성';

console.log(text);
console.log(text2);
console.log(text + text2);

// 문자 + 변수를 동시에 쓰고 싶을 때
console.log(text + '저는 Damon 입니다. 저의 성별은 ' + gender + ' 입니다!'); // 문자열 연결
console.log(text, text2, '야호');

// *템플릿 리터럴 (= 문자를 표현하는 새로운 문법)
// (ES6) 백틱(`)과 달러($), 중괄호({}) 조합으로 사용한다.
// - 문자열 내에서 변수와 상수를 간결히 표현
console.log(`${text} 저는 Damon 입니다. 저의 성별은 ${gender} 입니다.!`);

// 2. number (숫자형)
// - 정수, 실수
// - 연산이 가능하다. (+ - * / %)
let num = 100;
let num2 = 0.12;

console.log(num, num2);
console.log(num + 1);
console.log(num - 1);
console.log(num * 2);
console.log(num / 2);

// Q) 정수로 나오는 이유?
// A) JS에서는 정수와 실수를 구분하지 않고 모두 "Number" 타입으로 처리한다.
// - 즉, JS에서는 모든 숫자를 같은 타입으로 취급한다.

// 실수의 형태를 유지하고 싶다면. 'toFixed()' 라는 메서드를 사용해야 한다. (나중에 배움)

// #3. boolean (불리언)
// - true, false (참, 거짓) 두 가지 값만 가지는 데이터
let isWater = true;
let haveMoney = false;
console.log(isWater, haveMoney);

// #4. null (빈 값)
// "값이 없음"을 의도적으로 개발자가 명시한 것.
let temp = null;
console.log(temp);
temp = 'Hello';
console.log(temp);

// 5. undefiened
// 값도 없고, 타입도 지정되지 않은 상태
let x; // 변수 선언만 했을 때 초기 값으로 undefined 할당.
console.log(x); // undefined

// [Quiz]
// Q1. 코드 실행 시 q1 변수는 어떤 값이 될까?
let q1 = 3;
console.log(q1 - 2); // 1
console.log(q1); // 3

// Q2. 다음 코드 실행 시 q2 변수는 어떤 값이 될까?
let q2 = 10;
q2 = q2 + 5;
q2 = q2 - 2;
console.log(q2); // 13

// Q3. 다음 코드 실행 시 q3 변수는 어떤 값이 될까? (상수) - 바뀌면 안됨.
const q3 = 1;
// q3 = q3 + 1; // Error
console.log(q3);

// Q4. 다음 실행 값은 무엇일까?
let ex = 2;
let am = '2';
let s = 2;
console.log(ex + am - s);
// 22 - 2 (문자열은 계산되지 않고 옆에 붙여서 출력
// 20
// JS -> 느슨한 언어의 단점, JS는 느슨한 언어로 타입 명시를 제대로 하지 않아..

// 6. 배열(Array)
// 배열의 이름: fruits
// 배열의 요소(아이템): 배열 안에 있는 데이터 하나하나
// 배열의 위치(인덱스): 0부터 시작 - zero based numbering
// 배열의 길이(크기): 요소의 개수와 동일

const fruits = ['orange', 'pineapple', 'grape', 'apple'];
// 이 배열의 길이는 4이다.
console.log(fruits); // 화살표 누르면 자세히 볼 수 있음. index와 length 나옴.
console.log(fruits[0]); // orange // fruits 배열의 위치기 0인 요소 출력
console.log(fruits[1]); // pineapple
console.log(fruits[2]); // grape
console.log(fruits[3]); // apple

// JS에서는 배열 원소의 자료형이 달라도 됨!
// Why? JS의 동적 타입 특성으로 인한 유연성 -  "느슨한 언어"
// JS의 동적 타입 특성: JS가 알아서 판단함.
const mixedArray = [1, 'Damon', true, { name: 'Layla' }, null, undefined];
// { name : 'Layla'} -> 객체 형태로 속성+메소드로 이루어져 있다.

// Array 안에 Array 들어갈 수 있음. 중청 가능 => 2차원 배열
const korean = [
    ['가', '나', '다'],
    ['라', '마', '바'],
    ['사', '아', '자'],
];
console.log(korean); // (3) [Array(3), Array(3), Array(3)]
console.log(korean[0]); // (3) ['가', '나', '다']
console.log(korean[1]);
console.log(korean[2]);
console.log(korean[0][0]); // 가

// Quiz 1) '바'만 뽑아 내려면?
console.log(korean[1][2]); // 바

// Quiz 2) '가자' 글씨를 출력
console.log(korean[0][0] + korean[2][2]); //가자

// Quiz 3) 3차원 배열에서 '8' 출력하기
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
];
console.log(nums[1][0][1]); // 8

// 7. 객체 object (key: value의 형태)
// - 프로그래밍에서 실제 존재하는 개체나 개념을 표현하는 데이터 구조.
// - 중괄호로 포함됨.
// - 속성과 메서드로 구성.

// * 속성
// - 키(key)와 값(value)의 쌍으로 이루어져 있다. - 상태나 특징을 나타냄.

// * 메서드
// - 함수(function)를 값으로 가진다. - 동작이나 행위를 나타냄.
const cat = {
    name: '장화',
    age: 10,
    isCute: true,
    mew: function () {
        return '먕';
    },
};
console.log(cat); // {name: '장화', age: 10, isCute: true, mew: ƒ} // object 자체를 출력

// 객체(object)의 속성(key)에 접근하는 방법.
// #1. 점 표기법(.)
console.log(cat.name); // 장화
console.log(cat.age); // 10
console.log(cat.mew); // ƒ () { return '먕'; }

// #2. 대괄호 표기법([])
console.log(cat['name']); // 장화
console.log(cat['isCute']); // true

// #3. key가 변수에 저장되어 있을 때 사용법
const tempVal = 'name'; // key는 해당되는 객체 안에만 존재하기 때문에 ''를 쓰지 않으면 줄그어짐
console.log(cat[tempVal]); // 장화 // cat['name'] 과 동일하다. cat.name과 동일

// 8. typeof: 자료형을 확인할 수 있는 키워드
// * 구문
// typeof X (X는 어떤 무언가)
console.log(typeof '문자'); // string
console.log(typeof 12345); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null); // null -> object
// js의 초기 구현 중 하나로서, null 값을 object로 분류하는 것은 공식적으로 인정한 언어의 설계상 오류
console.log(typeof undefined); // undefined
console.log(typeof fruits); // Array -> object
console.log(typeof cat); // object -> object

// 9. 형변환
// 성적 평균 구하는 프로그램을 만들 때,
// prompt(): js에서 사용자로부터 입력을 받을 때 사용하는 브라우저 내장 함수. (브라우저 안에 있는 기능)
// let mathScore = prompt('수학 점수 입력');
// console.log('mathScore >> ', mathScore, typeof mathScore); // 50 입력 시 // mathScore >>  50 string
// let engScore = prompt('영어 점수 입력');
// console.log('engScore >> ', engScore, typeof engScore);
// let avg = (mathScore + engScore) / 2;
// console.log(`수학, 영어 평균점수는 ${avg}점 입니다.`); // 50, 80 입력 시 // 수학, 영어 평균점수는 2540점 입니다. // 문자로 인식해서 5080/2가 계산됨.

// prompt 사용자에게 메시지를 표시하고 입력을 받는 함수.
// 사용자에게 보여줄 메세지를 받을 수 있다.
// prompt로 입력 받은 값은 '문자'로 저장이 된다. -> JS의 자동 형변환 -> 명시적 형변환 필요
// 명시적 형변환: 자동 형변환에 의존하지 않고 개발자가 직접 형변환을 하는 것.

// 명시적 형변환
// #1. String() : 문자로 형변환.
let str1 = true; // boolean
let str2 = 123; // number
let str3 = undefined; // undefined

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
console.log(String(str3), typeof String(str3));

console.log(str1.toString(), typeof str1.toString());
console.log(str2.toString(), typeof str2.toString());

// #2. Number(): 숫자로 형변환
let n1 = true; // boolean
let n2 = false; // boolean
let n3 = 123.9; // number
console.log(Number(n1), typeof Number(n1)); // 1
console.log(Number(n2), typeof Number(n2)); // 0
console.log(Number(n3), typeof Number(n3)); // 123.9 - 실수
console.log(parseInt(n3, 10)); // n3 값을 10진수의 정수(int)로 바꾸겠다. // 123
console.log(parseFloat(n3)); // n3 값을 실수(float)로 바꾸겠다. // 123.9

// +) null, undefined를 숫자로 바꾼다면?
console.log(Number(undefined), typeof Number(undefined)); // NaN, number
// NaN = Not-A-Number (= 숫자가 아님)
// 정의 되지 않은 값이 숫자로 변환 될 수 없기 때문!
console.log(Number(null), typeof Number(null)); // 0, number

// 성적 평균 구하는 프로그램을 다시 만들기
// let mathScore = prompt('수학 점수 입력');
// let engScore = prompt('영어 점수 입력');
// let avg = (Number(mathScore) + Number(engScore)) / 2; // Number로 형변환 시
// console.log(`수학, 영어 평균점수는 ${avg}점 입니다.`);
