/**
 * FAQ URL 매핑 관리
 *
 * Developer : 김민희
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Loading = <div>Loading...</div>
const FAQPage = lazy(('../pages/faq/FAQPage'));
const FAQRegistPage = lazy(('../pages/faq/FAQRegistPage'));
const FAQDetailPage = lazy(('../pages/faq/FAQDetailPage'));
const FAQModifyPage = lazy(('../pages/faq/FAQModifyPage'));

const FaqRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/" element={FAQPage} />
          <Route path="/regist" element={FAQRegistPage} />
          <Route path="/detail/:id" element={FAQDetailPage} />
          <Route path="/modify/:id" element={FAQModifyPage} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default FaqRoutes;
