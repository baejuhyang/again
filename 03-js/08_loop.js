// 반복문

// 1. for문

/*
    * 구문
    for ([변수 선언 & 초기 값 설정]; [조건식(범위 지정)]; [증감식]) {
        반복 시킬 코드 내용 입력
    }
 */

// for (let i = 0; i < 10; i++) {
//     // i가 0~9 총 10번 반복
//     console.log('안녕', i);
// }

// 1 ~ 5 출력
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// 5 ~ 1 출력
// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// 1부터 n까지의 합 구하기
// let n = 10; // 어떤 숫자까지 합을 구할지에 대한
// let sum = 0; // 합을 저장할 변수
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum); // 55

// 2. for ~ if 중첩
// * 간단 실습

// Q) 1 ~ 20 중에서 짝수일 때의 합을 구하기
// let sum2 = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         sum2 += i;
//     }
// }
// console.log(sum2); // 110

// let sum3 = 0;
// for (let i = 2; i <= 20; i += 2) {
//     sum3 += i;
// }
// console.log(sum3); // 110

//
// 3. while 문
// Ex1)
// let idx = 0;
// while (idx < 10) {
//     console.log('안녕', idx);
//     // idx = idx + 1;
//     // idx += 1;
//     idx++;
// }

// Ex2) 무한 루프
let idx2 = 0;
while (true) {
    // 의도적인 무한루프
    console.log('안녕', idx2);
    idx2 += 1;
    // -> 렉 걸림
    // 무한루프를 빠져나오는 조건을 걸어줘야함
    if (idx2 === 10) {
        break;
    }
}

// Ex3) while문 구구단
// let i = 1,
//     j = 1;

// while (i < 10) {
//     while (j < 10) {
//         console.log(`${i} X ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
//     j = 1;
// }

// Q) 1부터 20까지의 홀수 합 구하기 (while사용)
// let i = 1,
//     sum = 0;

// while (i <= 20) {
//     if (i % 2 === 1) {
//         sum += i;
//     }
//     i++;
// }
// console.log(sum);

// Q2) 10부터 1까지 역순으로 숫자 출력하기. whlie문 사용
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

///////////////////////////////////////
// 4. do ~ while 문
/**
 * while문과 비슷하지만, 조건을 반복문 실행 후 확인함.
 * 조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후 조건을 검사한다.
 * 즉, 항상 코드블록을 한 번 실행한 다음, 조건이 참인 동안 반복을 계속!
 */

/**
 * 구문
 * do {
 *      // 실행할 코드 내용
 * } while(조건);
 */

// Ex1)
// let g = 1;
// do {
//     console.log('g >>>', g);
//     g++;
// } while (g <= 5);
// 1 ~ 5까지 출력됨.

// // Ex2)
// let number;
// do {
//     number = parseINT(prompt('10보다 큰 숫자를 입력하세요'), 10);
// } while (number <= 10);
// console.log('입력한 숫자: ', number);
// 10보다 작은 수를 입력하면 조건을 계속해서 만족하기 때문에 prompt가 반복 실행됨.

// 5. break & continue
// - 반복문에서 사용되는 제어문.

// # break
// - 반복문을 완전히 중단하고 빠져나옴.

// # continue
// - 현재 반복을 중지하고 다음 반복으로 넘어감. 이번 회차 건너뛰기

// Ex) break
// for(let i = 1; i <= 10, i++){
//     if(i === 5){
//         break // i가 5일 때 바로 중단되고 for문을 빠져 나감.
//     }
//     console.log(i);
// } // 1 2 3 4까지 출력

// // Ex) continue
// for ( i= 1; i <= 5, i++){
//     if(i === 3){
//         continue;
//     }
//     console.log(i);
// } // 1 2 4 5 출력
