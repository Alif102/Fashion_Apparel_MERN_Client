import { useLoaderData } from "react-router-dom"
import ProductSliderAdd from "./ProductSliderAdd";

const ProductSlider = () => {
  const details = useLoaderData(); 

  return (

    <div>

      <div className="grid md:max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-3 gap-3 ">
        {

          details.length > 0 ? details.map(detail => <ProductSliderAdd key={detail._id}
            detail={detail}
          ></ProductSliderAdd>) : <h2 className="m-10 text-center">No Product Available</h2>

        }

      </div>





    </div>

  )
}

export default ProductSlider