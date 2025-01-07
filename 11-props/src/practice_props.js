// 실습1
// 새로운 파일을 하나 만들어주세요. 그리고 본인이 좋아하는 음식을 소개하는 문구를 작성해주세요.
// food라는 props를 생성하세요.
// props 기본값을 설정하여 food에 값이 없을 때도 기본값이 출력되도록 해주세요.
// food props만 빨간색 출력되도록 설정해주세요.

// const FoodComponent = ({ food = '돈까스' }) => {
//     return (
//         <p>
//             겉은 바삭, 속은 촉촉한 <span style={{ color: 'red' }}>{food}</span>
//             의 매력!
//         </p>
//     );
// };
// export default FoodComponent;

// 실습2
// 함수형 컴포넌트를 만드세요.
// title, author, price, type이란 props를 생성하세요.
// App.css에서 다음 사진과 비슷하게 출력되도록 클래스를 만들어주세요.
const BookComponent = ({
    title = '나의 하루는 4시 40분에 시작된다',
    author = '김유진',
    price = '13,500원',
    type = '자기계발서',
}) => {
    return (
        <div id="container">
            <h2 id="bestseller">이번주 베스트셀러</h2>
            <img src="data:image/jpeg;base64,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"></img>
            <div>
                <h3>{title}</h3>
                <p>저자: {author}</p>
                <p>판매가: {price}</p>
                <p>구분: {type}</p>
            </div>
        </div>
    );
};
export default BookComponent;

// 실습3
// 클래스형 컴포넌트를 만드세요. 그리고, text, valid란 props를 생성하세요.
// App 컴포넌트에서 text를 받아와 출력하게 해주세요. 그리고 text 값을 받아오지 못하면 "이건 기본 text props입니다."라는 문구가 출력되게 해주세요.
// text에 문자를 필수 props로 지정해주세요.
// button을 만들고 onClick으로 valid를 지정해주세요. valid는 콘솔에 "콘솔 띄우기 성공!"이라는 메세지를 출력하도록 해주세요.

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class ClassComponentPractice extends Component {
//     static defaultProps = {
//         text: '이건 기본 text props입니다.',
//         valid: () => console.log('콘솔 띄우기 성공!'),
//     };
//     static propTypes = {
//         text: PropTypes.string.isRequired,
//     };

//     render() {
//         const { text, valid } = this.props;

//         return (
//             <>
//                 <h2>{text}</h2>
//                 <button onClick={valid}>콘솔메시지</button>
//             </>
//         );
//     }
// }

// export default ClassComponentPractice;
