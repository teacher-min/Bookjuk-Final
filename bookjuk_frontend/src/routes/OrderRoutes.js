/**
 * 주문 URL 매핑 관리
 *
 * Developer : 조범희
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Loading = <div>Loading...</div>
const OrderUserPage = lazy(('../pages/order/OrderUserPage'));
const MyOrderPage = lazy(('../pages/order/MyOrderPage'));
const OrderDetailPage = lazy(('../pages/order/OrderDetailPage'));

const OrderRoutes = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/user" element={OrderUserPage} />
          <Route path="/myOrder" element={MyOrderPage} />
          <Route path="/Detail" element={OrderDetailPage} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

};

export default OrderRoutes;
