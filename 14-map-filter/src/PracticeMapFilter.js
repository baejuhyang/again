// 실습1 & 2
// import React, { useState } from 'react';

// export const PracticeMapFilter = () => {
//     const [inputName, setInputName] = useState('');
//     const [inputEmail, setInputEmail] = useState('');
//     const [personalInfo, setPersonalInfo] = useState([
//         { nameInfo: '코디', emailInfo: 'codi@gmail.com' },
//     ]);

//     const saveInfo = () => {
// const newPersonalInfo = personalInfo.concat({
//     nameInfo: inputName,
//     emailInfo: inputEmail,
// });

// setPersonalInfo(newPersonalInfo);
// setInputName('');
// setInputEmail('');
//     };

//     const handleEnter = (e) => {
//         if (e.keyCode === 13) {
//             saveInfo();
//         }
//     };

//     const deleteInfo = (targetNameInfo) => {
//         console.log(targetNameInfo);
//         const newPersonalInfo = personalInfo.filter(
//             (info) => info.nameInfo !== targetNameInfo
//         );
//         setPersonalInfo(newPersonalInfo);
//     };

//     return (
//         <>
//             <input
//                 type="text"
//                 placeholder="이름"
//                 value={inputName}
//                 onChange={(e) => {
//                     setInputName(e.target.value);
//                 }}
//             />
//             <input
//                 type="text"
//                 placeholder="이메일"
//                 value={inputEmail}
//                 onChange={(e) => {
//                     setInputEmail(e.target.value);
//                 }}
//                 onKeyDown={handleEnter}
//             />
//             <button onClick={saveInfo}>등록</button>
//             <ul>
//                 {personalInfo.map((info, index) => (
//                     <li
//                         key={index}
//                         onDoubleClick={() => {
//                             deleteInfo(info.nameInfo);
//                         }}
//                     >
//                         {info.nameInfo}: {info.emailInfo}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// };

// 실습 3
import React, { useState } from 'react';

export const PracticeMapFilter = () => {
    const [inputWriter, setInputWriter] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [searchPosts, setSearchPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState('검색 결과가 없습니다.');
    const [inputSearch, setInputSearch] = useState('');
    const [show, setShow] = useState('none');
    const [option, setOption] = useState('writer');

    const savePost = () => {
        const newPosts = posts.concat({
            writer: inputWriter,
            title: inputTitle,
        });

        setPosts(newPosts);
        setSearchPosts(newPosts);
    };

    const changeOption = (e) => {
        setOption(e.target.value);
    };

    const searchPostsFunction = () => {
        if (option === 'writer') {
            const newSearchPosts = searchPosts.filter((post) =>
                post.writer.includes(inputSearch)
            );
            setSearchPosts(newSearchPosts);
        }
        if (option === 'title') {
            const newSearchPosts = searchPosts.filter((post) =>
                post.title.includes(inputSearch)
            );
            setSearchPosts(newSearchPosts);
        }
        setSearchTitle('검색결과');
        setShow('block');
    };

    return (
        <>
            <div style={{ border: '1px solid black' }}>
                <label htmlFor="">작성자 : </label>
                <input
                    type="text"
                    placeholder="작성자"
                    value={inputWriter}
                    onChange={(e) => {
                        setInputWriter(e.target.value);
                    }}
                />
                <label htmlFor=""> 제목 : </label>
                <input
                    type="text"
                    value={inputTitle}
                    onChange={(e) => {
                        setInputTitle(e.target.value);
                    }}
                />
                <button style={{ margin: '5px' }} onClick={savePost}>
                    작성
                </button>
            </div>

            <select name="" id="" onChange={changeOption}>
                <option value="writer">작성자</option>
                <option value="title">제목</option>
            </select>
            <input
                type="text"
                placeholder="검색어"
                style={{ margin: '5px' }}
                value={inputSearch}
                onChange={(e) => {
                    setInputSearch(e.target.value);
                }}
            />
            <button style={{ margin: '5px' }} onClick={searchPostsFunction}>
                검색
            </button>
            <button
                onClick={() => {
                    setSearchPosts(posts);
                    setSearchTitle('검색결과');
                    setShow('block');
                }}
            >
                전체
            </button>
            <br />
            <br />
            <br />
            <table style={{ border: '2px solid black', width: '50vw' }}>
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

            <h3>{searchTitle}</h3>
            <table
                style={{
                    border: '2px solid black',
                    width: '50vw',
                    display: show,
                }}
            >
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                </tr>
                {searchPosts.map((post, i) => (
                    <tr>
                        <td>{i + 1}</td>
                        <td>{post.title}</td>
                        <td>{post.writer}</td>
                    </tr>
                ))}
            </table>
        </>
    );
};
