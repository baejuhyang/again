import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFound from './pages/NotFound';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                {/* 라우터의 영향은 받지만 <Routes>와는 다른 컴포넌트임을 구분함 */}

                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/products" element={<ProductPage />}></Route>
                    <Route
                        // 동적 라우트 설정
                        // - 경로에 콜론(:) 사용 // 콜론 다음의 값을 동적인 값으로 인식함.
                        path="/products/:productId"
                        element={<ProductDetailPage />}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                    {/* 우리가 지정한 경로 말고 모든 경로를 이쪽으로 받겠다 */}
                    {/* React router는 위에서 아래로 경로를 매칭 -> 와일드카드 경로가 위에 배치 시 모든 경로를 덮어 씌움 -> 와일드카드 경로는 항상 마지막에 배치 */}
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
