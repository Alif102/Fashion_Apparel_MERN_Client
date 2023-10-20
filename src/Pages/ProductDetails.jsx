// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import ProductDetail from "./ProductDetail";

import { useLoaderData } from "react-router-dom"

// const ProductDetails = () => {
//   const [detail, setDetail] = useState({});
//   const details = useLoaderData();
//   console.log(details)

// //   useEffect(() => {
// //     const idInt = parseInt(_id)
// //     const findDetails = details.find(item => item.id === idInt  );
    
// //     setDetail(findDetails)
// // }, [details,_id])
//   return (
//     <div>
//         <ProductDetail details={details}></ProductDetail>
//     </div>
//   )
// }

// export default ProductDetails

 import ProductDetail from "./ProductDetail";

const ProductDetails = () => {
  const details = useLoaderData();
  console.log(details)

  return (
    <div className="grid md:max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-3 gap-3 ">
      {
        details.map(detail => <ProductDetail key={detail._id}
          detail={detail}
          
          ></ProductDetail>)
      }

    </div>
  )
}

export default ProductDetails