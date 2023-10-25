import ProductDetail from "./ProductDetail";
import { useLoaderData } from "react-router-dom"
import ProductSlider from "./ProductSlider";

const ProductDetails = () => {
  const details = useLoaderData(); 

  return (

    <div>
      <ProductSlider />

      <div className="grid md:max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-3 gap-3 ">
        {

          details.length > 0 ? details.map(detail => <ProductDetail key={detail._id}
            detail={detail}
          ></ProductDetail>) : <h2 className="m-10 text-3xl text-center">No Product Available</h2>

        }

      </div>





    </div>

  )
}

export default ProductDetails