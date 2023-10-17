import { useLoaderData } from "react-router-dom"
import ShowProductCard from "./ShowProductCard";

const ShowProduct = () => {
    const products = useLoaderData();
  return (
    <div>
        <h2>ShowProduct {products.length}</h2>
        {
            products.map (product => <ShowProductCard 
                
            key={product._id} 

            product={product}>

            </ShowProductCard>)
        }

    </div>
  )
}

export default ShowProduct