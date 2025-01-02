// 실습 문제 1
// let age = Number(prompt('나이를 입력하세요'));

// function ageGroup() {
//     if (age >= 20) {
//         return '성인';
//     } else if (age >= 17) {
//         return '고등학생';
//     } else if (age >= 14) {
//         return '중학생';
//     } else if (age >= 8) {
//         return '초등학생';
//     } else if (age >= 0) {
//         return '유아';
//     } else {
//         return '올바른 나이를 다시 입력해 주세요';
//     }
// }

// console.log(ageGroup());

// 실습 문제 2
let now = new Date().getHours();
now < 12 ? console.log('오전') : console.log('오후');
console.log(now >= 12 ? '오후' : '오전');
