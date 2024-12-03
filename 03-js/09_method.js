// * 내장 메서드란?
// - 프로그래밍 언어(= JavaScript)나 프레임워크에서 기본적으로 제공되는 메서드.
// - 즉, 프로그래밍 언어의 기본 도구 (=자체에서 제공되는 기능)
// - 따로 설치하거나 추가 설정할 필요 X

// 문자열 관련 내장 메서드.
// - 문자열을 다루는데 유용한 기능들을 제공.

let str = 'Happy Birthday';
let str2 = '    Happy birthday   ';

console.log('str >>>', str);
console.log('str2 >>>', str2);

// #1. 배열[index] 문자열 인덱싱
console.log(str[0]); // H
console.log(str[4]); // y
console.log(str[0] + str[9]); // Ht

// Q) Hard
console.log(str[0] + str[1] + str[8] + str[11]); // Hard
console.log(`${str[0]}${str[1]}${str[8]}${str[11]}`); // Hard
// 벡틱은 변수를 출력하기 위해서만 쓰는건 아닙니다.
// 표현식을 평가해서 그 결과 값을 문자열에 삽입할 수 있기 때문에 사용.
// str[]처럼 인덱스를 사용한 문자열 접근도 하나의 표현식.

// #2. length 문자열의 길이
// length는 메서드가 아닌 속성이다.
console.log(str.length); // 14
console.log(str2.length); // 21

// #3. toUpperCase() toLowerCase() 대/소문자 변환
console.log(str.toUpperCase()); // HAPPY BIRTHDAY
console.log(str.toLowerCase()); // happy birthday

// #4. trim() 양끝 공백 제거
console.log(str2.trim()); // Happy birthday
console.log(str2.trim().length); // 14

// #5. indexOf() 글자 위치 찾기
// - 위치(index): 0부터 시작.
// - 같은 문자열이 있으면 처음에 나오는 위치로.
console.log(str.indexOf('y')); // 4
console.log(str.indexOf('i')); // 7
console.log(str.indexOf(' ')); // 5 // 공백도 가능
console.log(str.indexOf('v')); // -1
// 존재하지 않는 문자에 대해 검색하면 -1 반환.
console.log(str.indexOf()); // -1
// 매개변수로 아무 값이 들어가지 않는다면 -1 반환.

// #6. slice() 문자열 자르기
// - 위치(index): 0부터 시작.
// - 음수값이 들어간다면 뒤에서부터 순서를 센다.
// slice(start, end): start ~ end-1까지 자르기
console.log(str.slice(10)); // hday // 10번 위치의 글자 ~ 끝
console.log(str.slice(1, 5)); // appy // start 1번 위치의 글자 ~ end 4번 위치의 글자 까지 자르기
console.log(str.slice(-6)); // rthday // 뒤에서 6번째 위치의 글자부터 끝까지 (0부터 세는 것 아님)

// #7. replace() 문자열 바꾸기
console.log(str.replace('p', 'w')); // Hawpy Birthday
console.log(str.replace('B', 'w')); // Happy wirthday
console.log(str.replaceAll('p', 'w')); // Hawwy Birthday // 모든 p가 바뀜

// #8. split() 문자열 쪼개기 (배열로 변환)
// - 2개 이상 같은 문자열을 기준으로 쪼갤 시, 1개는 사라지고 남은 문자열 수 만큼 빈문자열("") 생성.
let str3 = 'dinner';
console.log(str3.split('e')); // (2) ['dinn', 'r'] // e를 기점으로 잘랐더니 e는 없어짐. e가 희생함.
console.log(str3.split('n')); // (2) ['di', '', 'er'] // 둘 다 사라지면서 빈 공백을 남김.
// n이 3개이면 // (4) ['di', '', '', 'er']

// #9. repeat()
console.log(str3.repeat(4)); // dinnerdinnerdinnerdinner

// 배열 관련 내장 메서드.
let arr = [1, 2, 3, 4, 5];
let arr2 = ['dog', 'panda', 'tiger', 'monkey'];

console.log('arr >>>', arr);
console.log('arr2 >>>', arr2);

// 문자열을 뒤집는 메서드는 없으니
// 문자열을 배열로 쪼개서 배열 관련 메서드 사용 후 다시 join하여 문자열로 만들어 줄 수 있다.
// 배열에 값을 추가하려면?
arr[5] = 6; // arr 배열의 5 index에 6이라는 값 추가
console.log('arr >>>', arr); // (6) [1, 2, 3, 4, 5, 6]
arr[8] = 100; // index를 건너뛰면 빈 값(empty)이 들어간다.
console.log('arr >>>', arr); // (9) [1, 2, 3, 4, 5, 6, empty × 2, 100]

// #1. push() 맨 끝에 요소 추가
arr.push(6);
console.log(arr); // (10) [1, 2, 3, 4, 5, 6, empty × 2, 100, 6]

// #2. pop() 맨 끝에 요소 제거
arr.pop();
console.log(arr); // (9) [1, 2, 3, 4, 5, 6, empty × 2, 100]

// #3. unshift() 맨 앞에 요소 추가
arr2.unshift('cat');
console.log(arr2); // (5) ['cat', 'dog', 'panda', 'tiger', 'monkey']

// #4. shift() 맨 앞에 요소 제거
arr2.shift();
console.log(arr2); // (4) ['dog', 'panda', 'tiger', 'monkey']

// #5. length 배열의 길이 반환
console.log(arr.length); // 9

// #6. includes(요소) 요소가 있는지 없는지 검사
// - true, false를 반환함.
console.log(arr2.includes('panda')); // true
console.log(arr2.includes('lion')); // false

// #7. reverse() 역순으로 바뀜
// - 원본 배열이 변경됨. (로그로 출력만 해도)
console.log(arr); // (9) [1, 2, 3, 4, 5, 6, empty × 2, 100]
console.log(arr.reverse()); // (9) [100, empty × 2, 6, 5, 4, 3, 2, 1] // 로그로 출력만 해도 원본 배열이 변경됨.
console.log(arr); // (9) [100, empty × 2, 6, 5, 4, 3, 2, 1] // 원본 배열이 앞에서 변경되어 reverse된 상태로 출력.

// #8. join() join 안의 문자열 기준으로 병합
console.log(arr2);
console.log(arr2.join('')); // dogpandatigermonkey
console.log(arr2.join(' ')); // dog panda tiger monkey
console.log(arr2.join('-')); // dog-panda-tiger-monkey

// * 메서드 체이닝 method chaining
// - 여러 메서드를 연결해서 사용할 수 있다.
console.log('hello'.split('')); // (5) ['h', 'e', 'l', 'l', 'o']
console.log('hello'.split('').reverse()); // ((5) ['o', 'l', 'l', 'e', 'h']
console.log('hello'.split('').reverse().join('')); // olleh
