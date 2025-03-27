/**
 * 회원 URL 매핑 관리
 *
 * Developer : 김재찬
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Loading = <div>Loading...</div>
const LoginPage = lazy(('../pages/user/LoginPage'));
const LogoutPage = lazy(('../pages/user/LogoutPage'));
const SignUpPage = lazy(('../pages/user/SignUpPage'));
const MyPage = lazy(('../pages/user/MyPage'));
const UpdateUserPage = lazy(('../pages/user/UpdateUserPage'));
const KakaoRedirectComp = lazy(('../components/user/Kakao/KakaoRedirectComp'));
const KakaoEasySignup = lazy(('../components/user/Kakao/KakaoEasySignup'));
const ProductLikePage = lazy(('../pages/product/ProductLikePage'));
const CartUserPage = lazy(('../pages/cart/CartUserPage'));
const OrderUserPage = lazy(('../pages/order/OrderUserPage'));
const MyOrderPage = lazy(('../pages/order/MyOrderPage'));
const OrderDetailPage = lazy(('../pages/order/OrderDetailPage'));
const NaverRedirectComp = lazy(('../components/user/Naver/NaverRedirectComp'));
const MyInfoPage = lazy(('../pages/user/MyInfoPage'));
const AnonymousPage = lazy(('../pages/user/AnonymousPage'));
const NaverEasySignup = lazy(('../components/user/Naver/NaverEasySignup'));
const VerifyPassword = lazy(('../components/user/VerifyPassword'));
const SecondhandMypagePage = lazy(('../pages/secondhand/SecondhandMypagePage'));
const QnAMypagePage = lazy(('../pages/qna/QnAMypagePage'));
const QnADetailMypagePage = lazy(('../pages/qna/QnADetailMypagePage'));

const UserRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={MyPage}>
          <Suspense fallback={Loading}>
            <Routes>
              <Route path="/myinfo" element={MyInfoPage}/>
              <Route path="/verify" element={VerifyPassword} />
              <Route path="/order/myOrder" element={MyOrderPage} />
              <Route path="/wish/:userId" element={ProductLikePage} />
              <Route path="/secondhand/:userId" element={SecondhandMypagePage} />
              <Route path="/qna/:userId" element={QnAMypagePage} />
              <Route path="/qna/detail/:qnaId" element={QnADetailMypagePage} />            
            </Routes>
          </Suspense>
        </Route>
        <Suspense fallback={Loading}>
          <Routes>
            <Route path="/carts/user" element={CartUserPage} />
            <Route path="/order/Detail" element={OrderDetailPage} />
            <Route path="/order/user" element={OrderUserPage} />
            <Route path="/login" element={LoginPage} />
            <Route path="/signup" element={SignUpPage} />
            <Route path="/logout" element={LogoutPage} />
            <Route path="/update" element={UpdateUserPage} />
            <Route path="/anonymouspage" element={AnonymousPage}/>
            <Route path="/kakaoLogin" element={KakaoRedirectComp} />
            <Route path="/NaverLogin" element={NaverRedirectComp} />
            <Route path="/easySignup" element={KakaoEasySignup} />
            <Route path="/naverSignup" element={NaverEasySignup} />
          </Routes>
        </Suspense>
      </Routes>
    </BrowserRouter>
  );

};

export default UserRoutes;
