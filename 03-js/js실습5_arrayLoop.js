// 배열과 반복문 실습
// 1 ~ 100까지의 배열 for문 이용해서 만들기
let array = [];
for (let i = 0; i <= 99; i++) {
    array.push(i + 1); // array[i] = i + 1;
}
console.log(array);

// 해당배열의 합을 for문 사용해서 구하기
let sum1 = 0;
for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
}
console.log(sum1);

// 해당배열의 합을 for of문 사용해서 구하기
let sum2 = 0;
for (let arr of array) {
    sum2 += arr;
}
console.log(sum2);

// 해당배열의 합을 for each문 사용해서 구하기
let sum3 = 0;
// array.forEach(function (arr) {
//     sum3 += arr;
// });
// array.forEach((arr) => (sum3 += arr));
array.forEach((arr) => {
    sum3 += arr;
});
console.log(sum3);

// 내장 메소드 실습
let fruits1 = [
    '사과',
    '딸기',
    '파인애플',
    '수박',
    '참외',
    '오렌지',
    '자두',
    '망고',
];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

// 두 배열에서 동일한 요소만 가지는 배열 same 만들기
// 두 배열에서 서로 다른 요소만을 가지는 배열 diff 만들기 // 딸기 자두

// 1) for문만 사용
// let same = [];
// let sameIndex = 0;
// for (let i = 0; i < fruits1.length; i++) {
//     for (let j = 0; j <= fruits2.length; j++) {
//         if (fruits1[i] === fruits2[j]) {
//             same[sameIndex] = fruits1[i];
//             sameIndex++;
//         }
//     }
// }
// console.log(same);

// let diff = [];
// let diffIndex = 0;
// for (let i = 0; i < fruits1.length; i++) {
//     let a = 0;
//     for (let j = 0; j <= fruits2.length; j++) {
//         if (fruits1[i] === fruits2[j]) {
//             a = a + 1;
//             break;
//         }
//     }
//     if (a < 1) {
//         diff[diffIndex] = fruits1[i];
//         diffIndex++;
//     }
// }
// console.log(diff);

// 2) for문, push() 사용
// let same = [];
// for (let i = 0; i < fruits1.length; i++) {
//     for (let j = 0; j <= fruits2.length; j++) {
//         if (fruits1[i] === fruits2[j]) {
//             same.push(fruits1[i]);
//         }
//     }
// }
// console.log(same);

// let diff = [];
// for (let i = 0; i < fruits1.length; i++) {
//     let a = 0;
//     for (let j = 0; j <= fruits2.length; j++) {
//         if (fruits1[i] === fruits2[j]) {
//             a = a + 1;
//             break;
//         }
//     }
//     if (a < 1) {
//         diff.push(fruits1[i]);
//     }
// }
// console.log(diff);

// 3) for문, includes() 사용

// let same = [];
// let diff = [];
// for (let i = 0; i < fruits1.length; i++) {
//     if (fruits2.includes(fruits1[i]) == true) {
//         same.push(fruits1[i]);
//     } else {
//         diff.push(fruits1[i]);
//     }
// }
// console.log(same);
// console.log(diff);

// 4)  filter(), includes() 사용
// const same = fruits1.filter(function (fruit1) {
//     return fruits2.includes(fruit1);
// });
// console.log(same);
// const diff = fruits1.filter(function (fruit1) {
//     return !fruits2.includes(fruit1);
// });
// console.log(diff);

// 화살표 함수 사용한 ver.
// const same = fruits1.filter((fruit1) => fruits2.includes(fruit1));
// console.log(same);
// const diff = fruits1.filter((fruit1) => !fruits2.includes(fruit1));
// console.log(diff);
