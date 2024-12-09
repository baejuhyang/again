// val() - value
function getValue() {
    // js
    // const inputVal = document.querySelector('input').value;
    // alert(inputVal);

    // jQuery
    const value = $('input').val();
    alert(value);
}

function setValue() {
    // js
    // document.querySelector('input').value = '하이!';

    // jQuery
    $('input').val('하이하이!');
}

// css()
function changeCssJS() {
    const span = document.querySelector('span');
    span.style.fontSize = '20px'; // 인라인 방식
    span.style.color = 'red';
}
// 여러개 다 바꾸고 싶다면 querySelectorAll 사용하고 반복문 해 주어야 함

function changeCssJquery() {
    // case1
    // $('span').css('font-size', '40px'); // css style
    // $('span').css('color', 'blue');

    // case2 - css 여러 속성을 한번에 적용
    $('span').css({
        fontSize: '40px', // 모든 span에 대해 폰트 크기 변경
        color: 'blue', // 모든 span에 대해 폰트 색상 변경
    });
}

function getCssJqery() {
    // JS
    // console.log(document.querySelector('span').style.color);
    // style 객체는 인라인 스타일에 설정된 값만 가져올 수 있음.

    // jQuery
    console.log($('span').css('color'));
    // .css() 메서드는 브라우저에게 계산된 스타일 값을 반환.
    // 계산된 스타일을 반환하므로, 인라인 스타일뿐만 아니라 모든 적용된 스타일 정보를 가져올 수 있음
    // 반환값은 대부분 RGB형식.
}

// attr()
function changeAttrJS() {
    // a태그 선택하고 href 속성값을 naver 주소로 변경
    const a = document.querySelector('a');
    // a.setAttribute('href', 'https://www.naver.com'); // HTML 속성 값을 설정하는 방법.
    a.href = 'https://www.naver.com'; // DOM 요소의 속성에 직접 접근하는 방법.
}

function changeAttrJquery() {
    $('a').attr('href', 'https://www.daum.net');
}

// text()
function changeTextJS() {
    // p-text 클래스를 갖는 요소 선택 후 요소의 텍스트를 임의 값으로 변경.
    // const p = document.querySelector('.p-text');
    // p.innerText = 'JS로 텍스트를 변경';
}
function changeTextJquery() {
    $('.p-text').text('jquery로 텍스트를 변경');
}

// html()
function changeHtmlJS() {
    // p-html 클래스를 갖는 요소 선택 후 <h3>javascript</h3>로 변경.
    const p = document.querySelector('.p-html');
    p.innerHTML = '<h3>javascript</h3>';
}
function changeHtmlJquery() {
    $('.p-html').html('<h3>jqeury</h3>');
}

// 요소 추가하기
// append()
function appendJS() {
    // 1. colors class를 갖는 요소 선택
    const colors = document.querySelector('.colors');
    // 2. li 태그 요소를 생성한 후
    const li = document.createElement('li');
    // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
    li.append('마지막 자식으로 추가된 js');
    // 4. colors 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
    colors.append(li);
}

function appendJquery() {}
