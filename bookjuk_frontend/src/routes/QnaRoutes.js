/**
 * Q&A URL 매핑 관리
 *
 * Developer : 김민희
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Loading = <div>Loading...</div>
const QnAPage = lazy(('../pages/qna/QnAPage'));
const QnARegistPage = lazy(('../pages/qna/QnARegistPage'));
const QnaDetailPage = lazy(('../pages/qna/QnaDetailPage'));
const QnaModifyPage = lazy(('../pages/qna/QnaModifyPage'));

const QnaRoutes = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/" element={QnAPage} />
          <Route path="/regist" element={QnARegistPage} />
          <Route path="/detail/:id" element={QnaDetailPage} />
          <Route path="/modify/:id" element={QnaModifyPage} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
  
};

export default QnaRoutes;
