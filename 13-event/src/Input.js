import React from 'react';

export default function Input({ setData }) {
    // 내부적 말고 외부에 함수 적어보기
    const handleInput = (e) => {
        setData((data) => {
            return { ...data, content: e.target.value };
        });
    };
    return (
        <div>
            내용: <input type="text" onChange={handleInput} />
        </div>
    );
}
