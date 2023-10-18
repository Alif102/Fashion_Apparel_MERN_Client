import { useLoaderData } from "react-router-dom"
import ShowProductCard from "./ShowProductCard";

const ShowProduct = () => {
    const products = useLoaderData();
  return (
    <div>
        <h2>ShowProduct {products.length}</h2>
        <div className="grid md:max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-3 gap-3 ">
        {
            products.map (product => <ShowProductCard 
                
            key={product._id} 

            product={product}>

            </ShowProductCard>)
        }
        </div>

    </div>
  )
}

export default ShowProduct