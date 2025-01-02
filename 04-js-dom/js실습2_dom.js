// HTML 내용 변경해보기
// const spanTag = document.getElementsByTagName('span')[0];
// spanTag.innerText = '맛없다';
// spanTag.style.color = 'red';
// spanTag.style.fontWeight = 'bold';

// html class 제어하기 - TodoList 변경하기
// const todo = document.querySelectorAll('.todo');
// const done = document.querySelectorAll('.done');

// for (let i = 0; i < todo.length; i++) {
//     todo[i].classList.remove('todo');
//     todo[i].classList.add('done');
// }

// for (let i = 0; i < done.length; i++) {
//     done[i].classList.remove('done');
//     done[i].classList.add('todo');
// }

// todo.forEach((i) => {
//     todo[i].classList.remove('todo');
//     todo[i].classList.add('done');
// });

// for (let i of done) {
//     i.classList.remove('done');
//     i.classList.add('todo');
// }

// toggle 사용
// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.classList.toggle('done');
//     li.classList.toggle('todo');
// }

// 요소 선택 및 다루기 실습 - 아이스크림 베스트9
const section = document.querySelector('section');

const icecreams = [
    '내가 아인슈페너?!',
    '엄마는 외계인',
    '민트 초콜릿 칩',
    '뉴욕 치즈케이크',
    '아이스 초당옥수수',
    '초콜릿 무스',
    '체리쥬빌레',
    '뮤! 넌 내거야',
    '오레오 쿠키 앤 크림',
];

for (let i = 0; i < icecreams.length; i++) {
    // 요소 생성
    let article = document.createElement('article');
    let image = document.createElement('img');
    let h3 = document.createElement('h3');
    let divArray = document.createElement('div');

    // 요소 추가
    section.append(article);
    article.append(image, h3, divArray);

    // 요소 CSS 적용
    article.classList.add('article-box');

    image.setAttribute('src', '../02-css/image/Donut.jpg');
    image.classList.add('img-box');

    h3.innerHTML = 'Top ' + (i + 1); // `Top${i+1}`
    h3.classList.add('text-center');

    divArray.innerHTML = icecreams[i];
    divArray.classList.add('text-center');
}
console.log(section);
