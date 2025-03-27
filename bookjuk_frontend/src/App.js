/**
 * 페이지 URL 매핑 관리
 *
 * Developer : 김리예
 */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './components/common/UserContext'; // Context 불러오기


function App() {

  const [loginFlag, setLoginFlag] = useState(false); // 로그인 상태
  const [cartItemCount, setCartItemCount] = useState(0); // 장바구니 아이템 개수

  return (
    <UserContext.Provider value={{ loginFlag, setLoginFlag, cartItemCount, setCartItemCount }}>
      <RouterProvider router={rootRouter} />
    </UserContext.Provider>
  )

}

export default App;
