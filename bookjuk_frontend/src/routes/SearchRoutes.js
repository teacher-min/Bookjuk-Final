/**
 * 검색 URL 매핑 관리
 *
 * Developer : 이수정
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Loading = <div>Loading...</div>
const SearchResultPage = lazy(('../pages/product/SearchResultPage'));

const SearchRoutes = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/results" element={<SearchResultPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

};

export default SearchRoutes;