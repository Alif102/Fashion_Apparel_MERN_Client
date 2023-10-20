/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import BrandCard from "./BrandCard";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(()=> { 
        fetch('/Brand.json')
        .then((res)=> res.json())
        .then((data)=> setBrands(data))
        .catch(error => console.error(error))
    },[])
  return (
    <div>
        
        <h2 className="text-3xl yongSerif m-5">Our Brands</h2>
        <div className="grid max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md mb-12 gap-7">
            {
                brands.map((brand)=> <BrandCard key={brand.id} 
                brand={brand}></BrandCard> )
            }
        </div>
    </div>
  )
}

export default Brands