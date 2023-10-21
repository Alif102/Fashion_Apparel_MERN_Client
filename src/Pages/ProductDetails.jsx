import ProductDetail from "./ProductDetail";

// import { useLoaderData, useParams } from "react-router-dom";
// import ProductDetail from "./ProductDetail";

import { useLoaderData } from "react-router-dom"



const ProductDetails = () => {
  const details = useLoaderData();

  return (

    <div>
      

          <div className="grid md:max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-3 gap-3 ">
      {

       details.length > 0 ?  details.map(detail => <ProductDetail key={detail._id}
        detail={detail}
    ></ProductDetail>) : <h2>No Data</h2>
        
      }

    </div>

        
        

     
    </div>
    
  )
}

export default ProductDetails