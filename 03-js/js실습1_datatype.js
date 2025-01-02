// 1번. object 변수 선언 실습
const introduce = {
    name: '이몽룡',
    age: 18,
    like: ['강아지', '고양이'],
    isMarried: true,
    girlfriend: {
        name: '성춘향',
        age: 16,
    },
};
console.log(introduce);

// 2번. 형변환 실습
let mathScore = prompt('수학 점수 입력');
let engScore = prompt('영어 점수 입력');
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(`수학, 영어 평균점수는 ${avgScore}점 입니다.`);
