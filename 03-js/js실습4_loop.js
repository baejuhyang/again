// 실습문제1 - 배수 찾기
// 방법1)
// for (let i = 1; i <= 10000; i++) {
//     if (i % 13 === 0 && i % 2 === 1) {
//         console.log(i);
//     }
// }

// 방법2)
// for (let i = 1; i <= n; i = i + 2) {
//     if (i % 13 === 0) {
//         console.log(i);
//     }
// }

// 방법3)
// for (let i = 13; i <= 10000; i = i + 26) {
//     console.log(i);
// }

// prompt를 이용해서 입력받은 수까지 13의 배수이면서 홀수인 숫자를 찾기
// let n = Number(prompt('숫자를 입력하세요.'));
// for (let i = 1; i <= n; i++) {
//     if (i % 13 === 0 && i % 2 === 1) {
//         console.log(i);
//     }
// }

// 실습문제2 - 구구단 출력하기
// 방법1) for문 사용
// for (let i = 1; i <= 9; i++) {
//     console.log(`---${i} 단---`);
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// 방법2) while문 사용
// let i = 1;
// let j = 1;
// while (i <= 9) {
//     console.log(`---${i} 단---`);
//     while (j <= 9) {
//         console.log(`${i} x ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
//     j = 1;
// }

// 실습문제3 - 배수의 합
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0 || i % 5 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// 실습문제4 - for문을 활용한 별 찍기
// n = 5
//      *
//     **
//    ***
//   ****
//  *****
// prompt를 사용해서 높이를 입력 받기. -  10진수의 정수 int형으로 형변환 할 것.

const n = parseInt(prompt('높이를 입력하세요'), 10);
for (let i = 1; i <= n; i++) {
    let star = '';
    for (let j = i; j < n; j++) {
        star += ' ';
    }
    for (let k = 1; k <= i; k++) {
        star += '*';
    }
    console.log(star);
}
