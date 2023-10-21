
// import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import IndividualProductDetail from "./IndividualProductDetail";

const IndividualProduct = () => {
    

    // const [detail, setDetail] = useState({});

    

    const details = useLoaderData();
    console.log(details)
    
   

    // useEffect(() => {
    //     const idInt = parseInt(_id)
    //     const findDetails = details.find(item => item.id === idInt  );
        
    //     setDetail(findDetails)
    // }, [details,_id])
    

    

  return (
    <div>
       
       <IndividualProductDetail details ={details}></IndividualProductDetail>
       

    </div>
  )
}

export default IndividualProduct