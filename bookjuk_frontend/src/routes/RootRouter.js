import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Loading
const Loading = <div>Loading...</div>

// BasicLayout
const BasicLayout = lazy(() => import('./layouts/BasicLayout'))

// 관리자
const AdminRoutes = lazy(() => import('./routes/AdminRoutes'))

// 장바구니
const CartUserPage = lazy(() => import('../pages/cart/CartUserPage'))

// 각 페이지별 라우터
const IndexPage = lazy(() => import('../pages/IndexPage'))
const ProductRoutes = lazy(() => import('./routes/ProductRoutes'))
const SecondhandRoutes = lazy(() => import('./routes/SecondhandRoutes'))
const NoticeRoutes = lazy(() => import('./routes/NoticeRoutes'))
const FaqRoutes = lazy(() => import('./routes/FaqRoutes'))
const QnaRoutes = lazy(() => import('./routes/QnaRoutes'))
const OrderRoutes = lazy(() => import('./routes/OrderRoutes'))
const UserRoutes = lazy(() => import('./routes/UserRoutes'))
const SearchRoutes = lazy(() => import('./routes/SearchRoutes'))

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Route element={BasicLayout}>
        <Suspense fallback={Loading}>
          <Routes>
            <Route path="/"           element={IndexPage} />
            <Route path="/admin"      element={AdminRoutes} />
            <Route path="/product"    element={ProductRoutes} />
            <Route path="/secondhand" element={SecondhandRoutes} />
            <Route path="/notice"     element={NoticeRoutes} />
            <Route path="/faq"        element={FaqRoutes} />
            <Route path="/qna"        element={QnaRoutes} />
            <Route path="/order"      element={OrderRoutes} />
            <Route path="/user"       element={UserRoutes} />
            <Route path="/carts/user" element={CartUserPage} />
            <Route path="/search"     element={SearchRoutes} />
          </Routes>
        </Suspense>
      </Route>
    </BrowserRouter>
  );
}

export default RootRouter;