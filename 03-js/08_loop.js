// 반복문

// 1. for문

/*
    * 구문
    for ([변수 선언 & 초기 값 설정]; [조건식(범위 지정)]; [증감식]) {
        반복 시킬 코드 내용 입력
    }
 */

for (let i = 0; i < 10; i++) {
    // i가 0~9 총 10번 반복
    console.log('안녕', i);
}

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum); // 55

// 2. for ~ if 중첩
// * 간단 실습

// Q) 1 ~ 20 중에서 짝수일 때의 합을 구하기
let sum2 = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log(sum2); // 110

let sum3 = 0;
for (let i = 2; i <= 20; i = i + 2) {
    sum3 += i;
}
console.log(sum3); // 110
