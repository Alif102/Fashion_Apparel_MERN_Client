
/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom"
import IndividualProductDetail from "./IndividualProductDetail";

const IndividualProduct = () => {
    

    const details = useLoaderData();
    console.log(details)

 
  return (
    <div>
       
       <IndividualProductDetail details ={details}></IndividualProductDetail>
       

    </div>
  )
}

export default IndividualProduct