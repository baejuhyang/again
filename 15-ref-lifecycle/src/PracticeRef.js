// 실습1
// 이슈: 값을 입력하지 않고 enter키 누르면 테이블에 빈 값이 추가됨
// 해결: ref를 이용하여 input에 값이 입력되지 않으면 input창에 focus 주기
import React, { useRef, useState } from 'react';

export const PracticeRef = () => {
    const [posts, setPosts] = useState([]);
    const [inputWriter, setInputWriter] = useState('');
    const [inputTitle, setInputTitle] = useState('');

    const writerRef = useRef('');
    const titleRef = useRef('');

    const savePost = () => {
        console.log(inputWriter, inputTitle);

        if (inputWriter === '') {
            writerRef.current.focus();
            return;
        } else if (inputTitle === '') {
            titleRef.current.focus();
            return;
        } else {
            const newPosts = posts.concat({
                writer: inputWriter,
                title: inputTitle,
            });

            setPosts(newPosts);
            setInputWriter('');
            setInputTitle('');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alinItems: 'center',
            }}
        >
            <div>
                작성자:
                <input
                    type="text"
                    placeholder="작성자"
                    value={inputWriter}
                    onChange={(e) => {
                        setInputWriter(e.target.value);
                    }}
                    ref={writerRef}
                />
                제목:
                <input
                    type="text"
                    value={inputTitle}
                    onChange={(e) => {
                        setInputTitle(e.target.value);
                    }}
                    ref={titleRef}
                />
                <button onClick={savePost}>작성</button>
            </div>
            <br />

            <table style={{ border: '2px solid black' }}>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                </tr>

                {posts.map((post, i) => (
                    <tr>
                        <td>{i + 1}</td>
                        <td>{post.title}</td>
                        <td>{post.writer}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
