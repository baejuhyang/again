// import React from 'react';
// import apple from './assets/apple.png';
// import banana from './assets/banana.png';
// import peach from './assets/peach.png';
// imiport로 가져왔다는 것은 모듈로 가져오고 모듈로 처리하겠다.

// #1.(정적) import 방식으로 가져와서 객체에 저장.
// - 파일이나 모듈을 컴파일 시점에 미리 가져옴.
// - 파일 경로가 고정되어 있어야 함.
// const images = {
//     apple,
//     banana,
//     peach,
// };

// export default function Result({ data }) {
//     const { fruit, background, color, content } = data;

//     return (
//         <div>
//             {/* fruit 변수는 문자열을 가지고 오는 것 */}
//             {/* images[fruit]로 가져오면 변수로 가져 올 수 있음 */}
//             <img src={images[fruit]} alt="" width={200} height={200} />
//             {/* 그냥 src={fruit}는 문자열 값일 뿐 브라우저가 이해할 수 있는 이미지 파일 경로가 아님, import한 변수가 될 수 없다. */}
//             <div style={{ backgroundColor: background, color: color }}>
//                 {content}
//             </div>
//         </div>
//     );
// }

// public 폴더는 빌드를 하지 않기 때문에, 빌드를 시킬 것들은 src 폴더에 넣어야 한다.
// public 폴더에 이미지 파일이 많아지면 로딩이 느려지겠죠...?

// #2.(동적) require() 방식
// - commonJS 이지만 Webpack에서 이를 지원하여 사용할 수 있음.
// - 런타임시에 동적으로 단일 파일을 가져올 수 있음.
// - 경로를 동적으로 설정 가능.
// - 즉, 파일이나 폴더 경로가 변수로 지정 될 때 유용.
// import React from 'react';

// export default function Result({ data }) {
//     const { fruit, background, color, content } = data;
//     return (
//         <div>
//             <img
//                 src={require(`./assets/${fruit}.png`)}
//                 alt=""
//                 width={200}
//                 height={200}
//             />
//             <div style={{ backgroundColor: background, color: color }}>
//                 {content}
//             </div>
//         </div>
//     );
// }

// #3. require.context() 방식
/**
 * - Webpack에서 제공.
 * - 특정 디렉토리의 파일들을 자동으로 탐색, 한 번에 가져옴.
 * - 함수로 반환해줌.
 *
 * [구문 분석]
 * require.context(directory, useSubdirectories, regExp)
 * - directory: 탐색할 티렉토리 경로 (문자열 형태로 입력)
 * - uesSubdirectories: 하위 디렉토리까지 포함할지 여부 (ture, false)
 * - regExp: 파일 이름을 필터링할 정규 표현식.
 *
 */

import React from 'react';

const images = require.context('./assets', false, /\.(png|jpe?g|svg)$/);
/**
 * . : 임의의 한 특수문자.
 * \. : .을 일반 문자로 취급하게 해서 실제 점(.)을 찾음.
 * ? : 앞에 글자가 있을수도 없을수도 있음.
 * $ : 문자열의 끝을 의미. -> 끝에 .png로 끝나야만 매칭.
 * | : or
 */
console.log('images', images);
console.log('모든 파일 경로를 배열로 반환', images.keys());

export default function Result({ data }) {
    const { fruit, background, color, content } = data;
    return (
        <div>
            <img
                src={images(`./${fruit}.png`)}
                alt=""
                width={200}
                height={200}
                // 리액트에서는 단위를 적어주지 않으면 px로 처리.
            />
            <div style={{ backgroundColor: background, color: color }}>
                {content}
            </div>
        </div>
    );
}
