
/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom"
import MyCartCard from "./MyCartCard";
// import MyCartCard from "./MyCartCard"


const MyCart = () => {
  const cartData = useLoaderData()
  console.log(cartData)
  // const {name, price} = cartData;
    

    // console.log(details)

 
  return (
    <div>
      {/* {
        cartData.length > 0 ? <h2 className=" mt-10 text-center text-red-600 font-mono">No Cart Available</h2>
 
        : 
        <MyCartCard cartData={cartData}></MyCartCard>

      } */}
       {/* <MyCartCard cartData ={cartData}></MyCartCard> */}
       {/* <div className="grid md:max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-3 gap-3 "> */}
        {/* {

         cartData.map(cart => <MyCartCard 
          key={cart._id}
          cart={cart}>    
          </MyCartCard>) 

        } */}
        {/* <h2>{cartData.length}</h2>
        <h2>{name}</h2>
        <h2>{price}</h2> */}

      {/* </div> */}
      <MyCartCard cartData={cartData}></MyCartCard>
       

    </div>
  )
}

export default MyCart