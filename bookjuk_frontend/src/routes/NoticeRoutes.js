/**
 * 공지사항 URL 매핑 관리
 *
 * Developer : 김민희
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Loading = <div>Loading...</div>
const NoticePage = lazy(('../pages/notice/NoticePage'));
const NoticeRegistPage = lazy(('../pages/notice/NoticeRegistPage'));
const NoticeDetailPage = lazy(('../pages/notice/NoticeDetailPage'));
const NoticeModifyPage = lazy(('../pages/notice/NoticeModifyPage'));

const NoticeRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/" element={NoticePage} />
          <Route path="/regist" element={NoticeRegistPage} />
          <Route path="/detail/:id" element={NoticeDetailPage} />
          <Route path="/modify/:id" element={NoticeModifyPage} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default NoticeRoutes;
