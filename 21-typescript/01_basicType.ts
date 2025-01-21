// typescript basic type
// 타입 지정 [명시적]
let a: number = 1;
a = 2;
console.log(a);

let b: String = 'str';
let c: Boolean = true;
let d: undefined;
let e: null = null;
console.log(b, c, d, e);

// 타입 추론 [암묵적]
// TypeScript는 변수의 초기 값을 기반으로 변수의 타입을 자동으로 추론한다.
// 이를 암묵적 타입 추론이라고 한다.
let aa = 1; // aa의 타입을 number로 추론함.
let bb = 'hi';
let cc = false;
let dd;
let ee = null;
console.log(typeof aa, typeof bb, typeof cc, typeof dd, typeof ee);

// -------------------------------
// #1. [배열]
let numArr: number[] = [1, 2, 3, 4, 5];
// numArr = ['a', 'b', 'c']; // type error

// #2. [배열의 원소가 여러 타입일 경우]
let arr1: (number | boolean | string)[] = [1, true, 'string']; // 배열 내에서 순서는 상관 없음
// '|' 연산자 -> ts에서는 '유니온 타입'이라고 한다.
// - 하나의 값이 여러 타입 중 하나일 수 있음을 명시하는 타입 시스템의 기능

// #2-1. [유니온 타입과 제네릭 배열 타입의 조합] -> 제네릭 배우고 나서!

// #3. [어떤 자료형이든 상관 없는 배열]
let arr3: any[] = [1, 2, 3, 'wow', null, true];

// -------------------------------

// [객체]
let obj1: object = {
    name: 'damon',
    grade: 1,
};
