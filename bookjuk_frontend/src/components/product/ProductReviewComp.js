import { useEffect, useState } from 'react';
import { getIdFromSessionStorage } from '../../common/settings';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetail } from '../../api/productRestAPI';
const ProductReviewComp = () => {

  // userId 받아와서 상품 문의 구현
  const userId = getIdFromSessionStorage();

  // 페이지 이동 함수
  const navigate = useNavigate();

  // 상품 id 추출
  const {productId} = useParams();

  // serverData
  const [serverData, setServerData] = useState({
    status: 0,
    message: '',
    results: {
      inquiries: [],
      product: {},
    },
  });

  useEffect(() => {
    getProductDetail(productId).then((jsonData) => {
      console.log(jsonData);
      setServerData(jsonData);
    });
  }, [productId]);

  // 상품 문의 버튼
  const handleProductInqButton = async () => {
    if (!userId) {
      alert('로그인이 필요합니다.');
      return;
    }
    navigate(`/qna/regist?productId=${productId}`);
  }


  return (
    <div>
    <div>상품 리뷰</div>
    </div>
  );
};

export default ProductReviewComp;
