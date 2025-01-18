import React, { use, useEffect } from 'react';
// [custom Hook #2]
// - 동적으로 페이지 제목 설정
// - 컴포넌트가 언마운트 될 때 이전 제목으로 복원하는 기능

export default function useTitle(title) {
    useEffect(() => {
        // mount 시 시행 공간
        const prevTitle = document.title; // 기존 제목을 저장
        document.title = title; // 새로운 제목으로 설정
        // console.log('useEffect 마운트');
        // console.log('title', title);
        // console.log('document.title', document.title);
        // console.log('prevTitle', prevTitle);

        return () => {
            document.title = prevTitle;
            // console.log('클린함수 실행!!!!!!!!!!!!');
            // console.log('title', title);
            // console.log('document.title', document.title);
            // console.log('prevTitle', prevTitle);
        }; // unmount 시 시행 공간: 기존 제목으로 복원
    }, [title]); // title이 변경 될 때마다 문서의 제목을 업데이트함.
}
