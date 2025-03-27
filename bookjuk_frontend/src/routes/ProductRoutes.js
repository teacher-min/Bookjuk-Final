/**
 * 상품 URL 매핑 관리
 *
 * Developer : 이수정
 */

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Loading = <div>Loading...</div>
const ProductPage = lazy(() => import('../pages/product/ProductPage'))
const ProductNewPage = lazy(() => import('../pages/product/ProductNewPage'))
const ProductPopularPage = lazy(() => import('../pages/product/ProductPopularPage'))
const ProductDetailPage = lazy(() => import('../pages/product/ProductDetailPage'))

const ProductRoutes = () => {

  return (
    <Suspense fallback={Loading}>
      <Routes>
        <Route path="/"                  element={<ProductPage/>} />
        <Route path="/new"               element={<ProductNewPage/>} /> 
        <Route path="/popular"           element={<ProductPopularPage/>} />
        <Route path="/detail/:productId" element={<ProductDetailPage/>} />
      </Routes>
    </Suspense>
  );

};

export default ProductRoutes;
