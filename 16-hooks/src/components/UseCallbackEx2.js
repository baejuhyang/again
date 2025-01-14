import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

export default function UseCallbackEx2({ postId }) {
    const [post, setPost] = useState({});
    // [before]
    // const getPost = async () => {
    //     console.log('data fetching...');

    //     // 데이터 요청
    //     try {
    //         const res = await axios.get(
    //             `https://jsonplaceholder.typicode.com/posts/${postId}`
    //         );
    //         setPost(res.data);
    //         console.log('res', res);
    //         console.log('res.data', res.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // console.log('post', post);

    // [after]
    // useCallback 훅으로 메모이제이션 -> 의존성 배열에 있는 내용이 변경되지 않는 한 컴포넌트는 리렌더링 되지 않음.
    // => 내가 필요한 순간에만 api 요청을 날림.
    const getPost = useCallback(async () => {
        console.log('data fetching...');

        // 데이터 요청
        try {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${postId}`
            );
            setPost(res.data);
            console.log('res', res);
            console.log('res.data', res.data);
        } catch (error) {
            console.log(error);
        }
    }, [postId]); // postId가 변경될 때만 data를 가져옴

    // axios
    // - 외부 라이브러리 => 패키지 설치 필요
    // - Promise 기반
    // - asnyc/await 구문과 함께 사용 가능능
    // 자동으로 json 데이터로 파싱해줌. -> 서버로부터 받은 응답을 자동으로 JSON으로 파싱해서 response.data저장됨.
    // => fetch와 달리 res.json() 수동으로 가져 올 필요가 없음.

    // useEffect(() => {
    //     // 랜더링되자마자 함수 실행
    //     getPost();
    // }, []);

    // useEffect 의존성 배열에 '함수'를 적을 시 함수가 실행될 때마다 작동됨
    // 컴포넌트가 리렌더링 -> 함수 재생성 (주소값 변경) -> getPost 함수를 무한 호출이 됨
    useEffect(() => {
        getPost();
    }, [getPost]); // 새로운 함수로 인식을 하고 useEffect가 실행됨
    // useCallback을 사용 시

    return (
        <div>
            <h1>useCallback Ex2</h1>
            {post.id ? post.title : '로딩중'}
        </div>
    );
}

/**
 * useCallback 훅을 사용하여 getPost 함수를 메모이제이션했기 때문에,
 * getPost 함수는 postId가 변경되지 않는 한 "동일한 참조값"을 유지합니다.
 *
 * 하지만 useEffect의 의존성 배열에 getPost 함수를 넣으면,
 * getPost 함수가 변경될 때마다 useEffect가 재실행되므로,
 * 의존성 배열에 무엇을 넣어야 하는지 신경 써야 함.
 *
 * 우리가 원하는 것은 postId가 변경될 때만 getPost가 호출되도록 하는 것.
 * 따라서 useEffect의 의존성 배열에는 count 대신 getPost를 넣어야함.
 *
 * getPost가 메모이제이션된 함수이기 때문에,
 * 실제로 postId가 변경 될 때만 getPost가 다시 생성되어 useEffect가 트리거됩니다.
 *
 * 이렇게 하면 postId가 변경될 떄마다 getPost 함수가 새로 생성되고 (= 새로운 참조값 할당),
 * useEffect가 호출되면서 API 요청이 이루어짐.
 *
 * ==> 우리는 필요한 순간에만 API 요청을 할 수 있게 제어할 수 있는 것!
 */
