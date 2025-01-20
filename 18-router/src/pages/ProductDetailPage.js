import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
    const { productId } = useParams(); // :productId 가져온 것
    console.log('파라미터 값: ', productId, typeof productId); // '클릭한 ID 값', string
    // #5. useParams
    // - URL 경로에서 동적 파라미터 값을 가져옴. (추출!)
    // - 다중 파라미터는 객체 형태로 반환.
    // - 항상 '문자열'로 반환.

    // console.log('상품 Data: ', productInfos);
    const targetProduct = productInfos[Number(productId) - 1];
    // 타겟한 상품이랑 인텍스 번호를 일치 시키는 과정
    // 숫자 값으로 처리하기 위해 형변환!
    // console.log(targetProduct);
    const { id, name, email, body } = targetProduct;

    // return (
    //     <div>
    //         <h1>ProductDetailPage</h1>
    //         <ul>
    //             <li>상품번호: {id}</li>
    //             <li>상품명: {name}</li>
    //             <li>판매자: {email}</li>
    //             <li>상세설명: {body}</li>
    //         </ul>
    //     </div>
    // );

    // #6. useNavigate
    // - 프로그래밍 방식으로 경로 변경.
    // - 프로그램적으로 브라우저의 히스토리 기능 제어 가능 (뒤로가기, 앞으로가기)
    //
    // 숫자 인자 의미
    // 양수 숫자 n
    // - 현재 페이지에서 'n'페이지 앞으로 이동
    // ex) 1 = 다음 페이지
    // 음수 숫자 -n
    // - 현재 페이지에서 n페이지 뒤로 이동
    // ex) -1 = 이전 페이지지
    // useNavigate 동적 경로 이동 가능

    const navigate = useNavigate();
    const goToNextProduct = () => {
        const nextProductId = Number(productId) + 1; // 다음 상품 ID 계산
        navigate(`/products/${nextProductId}`); //  동적 경로로 이동
    };
    const goToPreviousProduct = () => {
        const prevProductId = Number(productId) - 1;
        if (prevProductId > 0) {
            navigate(`/products/${prevProductId}`);
        } else {
            alert('이전 상품이 없습니다!');
        }
    };

    return (
        <div>
            <h1>ProductDetailPage</h1>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <button onClick={() => navigate('/')}>홈으로 가기</button>
            <button onClick={goToPreviousProduct}>이전 상품</button>
            <button onClick={goToNextProduct}>다음 상품</button>

            <ul>
                <li>상품번호: {id}</li>
                <li>상품명: {name}</li>
                <li>판매자: {email}</li>
                <li>상세설명: {body}</li>
            </ul>
        </div>
    );
}
