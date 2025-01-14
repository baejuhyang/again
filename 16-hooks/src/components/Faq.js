import React from 'react';
import useToggle from '../hooks/useToggle';
import useTitle from '../hooks/useTitle';

export default function Faq() {
    const [isFagOpen, toggleFaq] = useToggle(); // [value, toggleValue] // 배열 구조 분해 할당
    // isFagOpen =  value
    // toogleFaq = toggleValue()

    // ifFaqOpen 상태에 따라 동적으로 페이지 제목 설정
    useTitle(isFagOpen ? 'FAQ Open' : 'FAQ Close');

    return (
        <>
            <h1>Custom Hook Ex1</h1>
            <div onClick={toggleFaq} style={{ cursor: 'pointer' }}>
                Q. 자주 묻는 질문
            </div>
            {isFagOpen && <div>A.질문에 대한 답변</div>}
        </>
    );
}
