// 함수
// - 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합.

//구조
// - keyword: function
// - name: 함수 이름 -  camelCase로 작성함.
// - parameter: 함수 선언 시 매개변수로 받을 것 ()
// - body: 함수 내부 코드 (Scope라고도 함.)

// 용어 정리
// - 함수 정의(선언): 함수를 "생성"
// - 함수 호출: 함수를 "사용"

// 함수 선언 방식
// #1. 명시적 함수 선언 (= 함수 선언문)
// - 함수 이름과 매개변수를 명시하고 함수의 본문을 중괄호로 감싼다.
// - 스크립트 어디에서든 호출 할 수 있다.
// - "function" 키워드를 사용하여 함수를 선언하는 방식.

function helloWorld() {
    // 함수 정의
    // return 키워드 생략 가능 (반환 값이 없을 때)
    console.log('Hello, world!');
}
helloWorld(); // 함수 호출 //

function helloWorld2() {
    return 'Hello, world! 2';
}
helloWorld(); // 출력을 하지 않아서 우리 눈으로 볼 수 없음.
// 눈으로 보기 위해 console.log를 찍어야 함.
console.log(helloWorld2());

// * return 이란? (반환 값)
// - 함수 내부 (body, block) 코드의 "최종 결과 값".
// - 최종 결과 값을 저장하고 보관하기 위한 키워드
// - return 키워드를 만나면 함수가 실행 중단됨. return 다음의 코드는 더 작성해봤자 의미가 없다고 생각함.

// #2. 함수 표현식 (Function Expression)
// - 변수에 익명 함수를 할당(저장)하는 형태. // JS에서는 함수도 하나의 값이기에 가능함.
// - 변수가 선언된 이후에만 호출할 수 있다.

// * 익명 함수란?
// - 이름이 없는 함수.
// - 이 함수를 변수에 담을 것이기 때문에 이름이 있을 필요가 없음.
// - 그런데, 이름을 지정할 수도 있음. 단, 이 경우에는 함수 이름은 내부에서만 사용 가능
// ex)
const sayHello = function hello() {
    console.log('hello');
};
sayHello();
// hello(); // ReferenceError: hello is not defined // 같은 scope 내에 있지 않기 때문.

const helloWorld3 = function () {
    // return 생략 버전.
    console.log('Hello, World! 3');
};

const helloWorld4 = function () {
    // return 있는 버전.
    return 'Hello, World! 4';
};

helloWorld3();
console.log(helloWorld4());
helloWorld3();
helloWorld3();
helloWorld3(); // 하나의 독립적인 개체로 반복사용(재사용) 가능.
// 함수는 "여러 번" 호출이 가능하다!

//////////////////////////////
// 매개변수가 있는 함수는 How? 어떻게?
// 1) 매개변수가 1개일 때
function food(text) {
    return text;
}
// 매개변수를 그대로 반환하는 함수

console.log(food('제육덮밥')); // 매개변수를 넣어 주어야 함. // text에 어떤 값이 와야 매개변수가 되어 반환을 함.

const drinkPrice = 2000;
console.log(food(drinkPrice)); // 2000

// 2) 매개변수가 2개일 때
function music(name, title) {
    // return name + '-' + title;
    return `${name} - ${title}`;
}

// 매개변수를 설정한 만큼 매개변수를 넣어주어야 한다.
console.log(music('윤도현', '흰수염고래'));

// 이렇게도 가능
function music2(name, title) {
    console.log(`${name} - ${title} `);
}
music2('악뮤', '후라이의 꿈');

// #3. 화살표 함수 arrow function (ES6부터 지원)
// - 함수 표현식의 축약형. 간결하게 정의.
// - 단일 표현식의 경우에는 중괄호와 return 키워드 생략 가능!
// 코드가 길어진다면(여러줄) 중괄호와 return 키워드 명시해야 한다.
// 함수명 쓰지 않음. (함수 표현식의 특징)

// 일반형(단일 표현식)
// function square(x) {
//     return x * x;
// }

// 축약형
const square = (x) => x * x;
console.log(square(3));

// 일반형 (여러줄)
// function triangle(base, height) {
//     const area = (base * height) / 2;
//     return area;
// }

// 축약형
const triangle = (base, height) => {
    const area = (base * height) / 2;
    return area;
};
console.log(triangle(3, 4)); // 6

// 호이스팅(hoitsting) - 함수와 변수에서 나타나는 현상
// - JS에서 변수 및 함수 선언이 해당 범위의 맨 위로 끌어올려지는 현상.
// - "함수 선언문"이 호이스팅! (함수 호출을 함수 선언의 위에서 해도 읽힌다.)
// - 변수에서는 "var"
sayHello5();
function sayHello5() {
    console.log('hello!');
}
// -- 정상 출력됨.
// Q) 호이스팅이 좋은거에요? 나쁜거에요?
// A) 좋고 나쁘다고는 할 수 없다. 코드를 읽기 쉽게 하지만, 혼동할 수 있으므로 주의해야함!
// 코드의 가독성을 높이기 위해서는 선언을 가능한 상단에 위치시키는것이 좋다.
// 따라서, 함수를 상단에 가능한 위치시키기 $ 함수 표현식으로 사용하자..!

// 함수 표현식
// - 호이스팅의 대상이 될 수 없음.
// - Why?
// - 변수에 함수가 할당되기 때문에 그 이후에만 호출 가능!
// sayHello6(); // ReferenceError!
const sayHello6 = () => console.log('hello2~~!');
sayHello6();
