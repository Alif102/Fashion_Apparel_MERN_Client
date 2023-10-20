/* eslint-disable react/prop-types */
// import Brand from './Brand'

import Brand from "./Brand";


const Brands = ({brandsData}) => {




  return (
    <div>

      <h1 className="text-3xl yongSerif m-5">Our Brands</h1>
      <div className="grid max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md mb-12 gap-7">
      
{
  brandsData.map(brandData => <Brand key={brandData.id} 
    brandData={brandData}
  ></Brand>)
}

</div>
      
    </div>
  )
}

export default Brands