// # generic
// - 선언할 때 타입을 지정하기 어려운 케이스가 존재.
// - 데이터 타입을 외부에서 지정.
// - 생성 시점에 타입을 명시.
// ---> 재사용성, 유연성 증가.
// ---> 타입을 변수처럼 사용할 수 있다.
// <T> 형태로 주로 사용. (관례)

// Ex1)
function numArrlen(arr: number[]): number {
    return arr.length;
}
console.log(numArrlen([1, 2, 3])); // 3

// Ex2)
function strArrlen(arr: string[]): number {
    return arr.length;
}
console.log(strArrlen(['1', '2', '3', '4'])); // 4

// Ex1, 2 처럼 모든 타입에 대해 배열의 길이를 검사하는 함수를 타입마다 만들지 않기 위해
// 제너릭 사용!

// #1. 제너릭 기본 사용법
// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만듦.
// -> type만 들어 올 수 있다.
function arrLen<T>(arr: T[]): number {
    return arr.length;
}
// T[]: T에 대응되는 자료형의 배열
console.log(arrLen<number>([1, 2, 3])); // 3
console.log(arrLen<string>(['1', '2', '3', '4'])); // 4
console.log(arrLen<string | number>([1, '투', '3', 4])); // 4

//
function printSome<T>(x: T, y: T): void {
    console.log(x, y);
}
printSome<string>('hi', 'hello');
printSome<number>(100, 200);
printSome<boolean[]>([true, false], [true, false]);

// #2. 두 개의 서로 다른 타입 매개변수 제너릭
// * 관례 일 뿐
// T: type
// U: usually
function printSome2<T, U>(x: T, y: U): void {
    console.log(x, y);
}
printSome2<string, number>('1', 1);
// -----------------------------------

// #3. interface와 generic
// Ex1)
interface Phone<T> {
    company: string;
    createAt: Date;
    option: T;
}

type iphoneOption = {
    color: string;
    storage: number;
};

const iphone20: Phone<iphoneOption> = {
    company: 'apple',
    createAt: new Date('2025-01-22'),
    option: {
        // 제너릭을 통해 옵션의 속성 타입을 유연하게 지정
        color: 'black',
        storage: 256,
    },
};
console.log(iphone20);

// Ex2)
type galaxyOption = {
    color: string;
    isBuz: boolean;
};

const galaxy25: Phone<galaxyOption> = {
    company: 'samsung',
    createAt: new Date('2025-01-21'),
    option: {
        color: 'blue',
        isBuz: true,
    },
};
console.log(galaxy25);
