console.log(document); // #document (http://127.0.0.1:5501/04-js-dom/03 d~.html)
console.log(document.childNodes); // NodeList(2) [<!DOCTYPE html>, html]
// 배열 형식을 가져옴. index값도 가짐.
// 키와 값의 쌍으로 이루어진 객체임.

console.log(document.childNodes[1]); // index로 html 태그 접근
console.log(document.childNodes[1].childNodes); // [head, text, body]
// html의 자식요소
// text: head와 body사이 text를 입력할 공간
console.log(document.childNodes[1].childNodes[2]); // index로 body 태그 접근
console.log(document.childNodes[1].childNodes[2].childNodes);
// => 이렇게 접근하면 너무 불편하니까. 이렇게 하지 않기 위해 속성과 메서드 사용.

// 조금 더 빠르고 편리하게 접근하기 위해 속성과 메소드 이용
console.log(document.head); // head태그에 한번에 접근 가능
console.log(document.body); // body태그에 한번에 접근 가능
console.log(document.title); // title태그에 한번에 접근 가능
console.log(document.URL); // http://127.0.0.1:5501/04-js-dom/03_document.html
console.log(document.domain); // 127.0.0.1
// * 취소선이 그어지는 이유
// - 해당 속성의 사용을 권장하지 않거나, 더 이상 지원되지 않을 가능성을 나타냄.
// - 최신 보안 정책에서는 도메인 사용한 접근 제어 방식이 보안상 취약할 수 있기 때문에 지양한다.
// - 여기서는 권장하지 않는다는 이유.

/////////////////////////////////////////
// document 객체를 이용한 HTML
// #1. 요소선택
// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));
// 한개씩만 지목 가능

// 2. getElementsByClassName // HTMLCollection
console.log(document.getElementsByClassName('pink')); // HTMLCollection(4) [div.pink, div.pink, div.pink, div.pink]
console.log(document.getElementsByClassName('pink')[2]);
console.log(document.getElementsByClassName('others')); // HTMLCollection(2) [div#green.others, div#red.others, green: div#green.others, red: div#red.others]

// 2. getElementsByTagName // HTMLCollection
console.log(document.getElementsByTagName('h1')); // HTMLCollection [h1]
console.log(document.getElementsByTagName('div')); // HTMLCollection(6) [div.pink, div.pink, div.pink, div.pink, div#green.others, div#red.others, green: div#green.others, red: div#red.others]

// 4. getElementsByName // NodeList
console.log(document.getElementsByName('id')); // NodeList(2) [input, input]

// 5. querySelector // CSS selector
// - 처음 발견한 하나만 가지고 옴.
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));

// 6. querySelectorAll // CSS selector // Nodelist
// - 선택자에 해당되는 모든 요소를 선택.
console.log('querySelecorAll');
console.log(document.querySelectorAll('.pink')); // NodeList(4) [div.pink, div.pink, div.pink, div.pink]
console.log(document.querySelectorAll('.others')); // NodeList(2) [div#green.others, div#red.others]
console.log(document.querySelectorAll('#green')); // NodeList [div#green.others]
console.log(document.querySelectorAll('div')); // NodeList(6) [div.pink, div.pink, div.pink, div.pink, div#green.others, div#red.others]
console.log(document.querySelectorAll('[name="id"]')); //NodeList(2) [input, input]

console.log(document.querySelectorAll('div')[4]); // index로 접근

// 범용성으로 작성한 것보다는 (qeurySelector는 범용성이 넓고 유연함.) 더 자유롭고 유연함.
// targeting 한 것이 성능이 좋다. (getElementsBy~) 특정짓는 것이 좋음.
// 성능차이는 미미할 수 있어 qeurySelector를 유연성 덕분에 사용하기는 하다.

// for문처럼 반복하기 위해서
console.log(document.querySelectorAll('div')[0]); // index로 접근
console.log(document.querySelectorAll('div')[1]); // index로 접근
console.log(document.querySelectorAll('div')[2]); // index로 접근
console.log(document.querySelectorAll('div')[3]); // index로 접근
console.log(document.querySelectorAll('div')[4]); // index로 접근

// * 유사 배열 (HTMLCollection, NodeList) // 배열은 아님.
/**
 * - []식으로 생긴 배열과 비슷하지만 완전히 같지는 않은 객체! - 배열처럼 사용은 가능
 * - HTML 문서 내 요소들을 그룹으로 묶어 제공하는 컬렉션.
 * - 배열처럼 Index, length를 가짐.
 * - but, 배열과 달리 사용 가능한 메서드가 제한적.
 */

// #1. HTMLCOllection
// - HTML 문서에서 특정 조건에 맞는 요소들을 실시간으로 컬렉션 형태로 반환.
// - 실시간: 문서 내용이 변경되면 HTMLCollection도 즉시 업데이트.
// - HTML 요소 전용: 컬렉션에 포함된 항목은 항상 HTML 요소.
// - 배열은 아님! : 배열처럼 인덱스로 접근 가능하나, 배열 메서드 (forEach, map 등) 사용 불가!

// 단일로 가져오는 것은 해당이 안됨. (유사배열이기 때문에 복수형태를 갖고있어야 함.)
// 반복문으로 돌리고 싶을 시
// for문으로 가능
const pinkElements = document.getElementsByClassName('pink');
for (let i = 0; i < pinkElements.length; i++) {
    console.log(pinkElements[i]);
}

// forEach()
// HTMLCollection -> forEach() 사용 못함. 배열 아님.
// 사용하고 싶다면 -> Array로 변경해서 메소드 사용하기. -> Array.from() 메서드 사용.

// Array.from() 메서드
// - ES6에서 도입된 JS 메서드.
// - "유사 배열 객체"나 "반복 가능한 객체"를 실제 배열로 변환하는데 사용.
// -또한, 배열을 생성하면서 특정 로직을 적용할 수도 있음.

// * 구문
// Array.from(arrayLike, mapFunction, thisArg)
// arrayLike: 필수. 배열로 변환할 "유사 배열 객체"나 "반복 가능한 객체"
// mapFunction: 선택. 새 배열의 각 요소에 대해 실행할 매핑 함수.
// thisArg: 선택. 거의 사용 안함. mapFunction을 실행할 때 사용할 this 값.

// 1) 유사 배열 객체를 배열로 변환.
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 }; // 유사배열객체
const array = Array.from(arrayLike);
console.log(array); // (3) ['a', 'b', 'c']

//  2) 문자열을 배열로 변환
const str = 'hello';
const strArray = Array.from(str);
console.log(strArray); // (5) ['h', 'e', 'l', 'l', 'o']

// 3) 숫자 범위 배열 생성
const range = Array.from({ length: 5 }, (_, i) => i + 1); // 매개변수 2개
// { length: 5 }
// (_, i) => i + 1) => 매핑함수
console.log(range); // (5) [1, 2, 3, 4, 5]
// _는 단순이 "인덱스를 이용해 배열을 생성한다"는 의도.
// [0, 1, 2, 3, 4]라는 배열
// 매핑함수는 인덱스마다 +1 => [1, 2, 3, 4, 5]

/**
 * 매개변수 의미
 * 1. _
 * - 배열의 각 요소 값을 나타냄.
 * - 배열을 생성할 때 초기값은 기본적으로 undefined이므로 사용되지 않는 경우가 많음.
 * - 사용하지 않을 때는 관습적으로 _로 표현하여 '사용하지 않는 값'임을 명시.
 *
 * 2. i
 * - 현재 인덱스를 나타냄.
 * - 배열의 각 위치에서 몇 번째 요소인지 알려줌.
 */

// 4) HTMLCollection을 배열로 변환. -> .forEach 매서드 사용 가능
const htmlcollection = document.getElementsByTagName('div');
// const array2 = Array.from(htmlcollection); // 배열로 변환
// console.log(array2); // (6) [div.pink, div.pink, div.pink, div.pink, div#green.others, div#red.others]

// array2.forEach((elem) => console.log(elem)); // forEach() 사용

// #2. NodeList
// - DOM에서 노드의 그룹을 반환. (텍스트 노드, 주석 노드 포함)
// - 정적: getElementsByName, querySelectorAll로 생성한 것은 정적.
// - 실시간: childNodes로 생성한 것은 실시간. (그 요소를 변경하면 해당되는 childnodes부분도 바로 변경됨)

// NodeList => forEach() 반복문 사용 가능
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

// for...of 반복문 사용 가능
const pinks = document.querySelectorAll('.pink');
console.log(pinks); // NodeList(4) [div.pink, div.pink, div.pink, div.pink]

for (let pink of pinks) {
    console.log(pink);
}

// 모든 요소는 모든 노드가 되지만, 모든 노드가 모든 요소는 아니다.
// 노드 안에 요소 포함되어있음.
