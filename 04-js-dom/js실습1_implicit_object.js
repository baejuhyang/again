// 내장 객체 실습문제1 -주말과 평일
let day = new Date();
day = day.getDay();

// if 사용
if (day === 0 || day === 6) {
    console.log('오늘은 주말');
} else {
    console.log('오늘은 평일');
}

// switch 사용
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('오늘은 평일');
        break;
    case 6:
    case 0:
        console.log('오늘은 주말');
        break;
    default:
        console.log('알 수 없음');
        break;
}

// 삼항연자사 사용
day === 0 || day === 6
    ? console.log('오늘은 주말')
    : console.log('오늘은 평일');

//  내장 객체 실습문제2 - 난수 생성
let number = Math.floor(Math.random() * 11);
console.log(number);
