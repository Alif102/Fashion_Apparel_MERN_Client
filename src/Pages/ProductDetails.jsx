import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductDetails = () => {
  const [detail, setDetail] = useState({});
  const {_id} = useParams();
  const details = useLoaderData();

  useEffect(() => {
    const idInt = parseInt(_id)
    const findDetails = details.find(item => item.id === idInt  );
    
    setDetail(findDetails)
}, [details,_id])
  return (
    <div>
        <ProductDetail detail={detail}></ProductDetail>
    </div>
  )
}

export default ProductDetails