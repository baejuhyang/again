// typescript basic type
// 타입 지정 [명시적]
var a = 1;
a = 2;
console.log(a);
var b = 'str';
var c = true;
var d;
var e = null;
console.log(b, c, d, e);
// 타입 추론 [암묵적]
// TypeScript는 변수의 초기 값을 기반으로 변수의 타입을 자동으로 추론한다.
// 이를 암묵적 타입 추론이라고 한다.
var aa = 1; // aa의 타입을 number로 추론함.
var bb = 'hi';
var cc = false;
var dd;
var ee = null;
console.log(typeof aa, typeof bb, typeof cc, typeof dd, typeof ee);
// -------------------------------
// #1. [배열]
var numArr = [1, 2, 3, 4, 5];
// numArr = ['a', 'b', 'c']; // type error
// #2. [배열의 원소가 여러 타입일 경우]
var arr1 = [1, true, 'string']; // 배열 내에서 순서는 상관 없음
// '|' 연산자 -> ts에서는 '유니온 타입'이라고 한다.
// - 하나의 값이 여러 타입 중 하나일 수 있음을 명시하는 타입 시스템의 기능
// #2-1. [유니온 타입과 제네릭 배열 타입의 조합] -> 제네릭 배우고 나서!
// #3. [어떤 자료형이든 상관 없는 배열]
var arr3 = [1, 2, 3, 'wow', null, true];
// -------------------------------
// [객체]
var obj1 = {
    name: 'damon',
    grade: 1,
};
