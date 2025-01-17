import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                {/* 라우터의 영향은 받지만 <Routes>와는 다른 컴포넌트임을 구분함 */}

                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    {/* /: 기본 경로로 이동 하겠다. */}
                    <Route path="/products" element={<ProductPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

// #1. BrowserRouter
// - 애플리케이션을 전체를 감싸서 라우팅을 활성화 (최상위 컴포넌트)
// - HTML5 History API를 사용함. =  주소 표시줄과 동기화하여 URL을 관리하며, SEO, UX를 향상시킴.

// #2. Routes: 여러 Route 컴포넌트를 묶어주는 컨테이너 역할.
// #3. Route: 특정 경로에 해당하는 컴포넌트를 렌더링 하는 역할.
//   - path: 특정 경로
//   - element: 보여줄 컨텐츠
