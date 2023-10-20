/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BrandCard = ({brand}) => {
    const {title ,image} = brand;

  return (
    <div >
      <Link to={`/details/${title}`}>
      <div className="card w-72 shadow-xl">
        <img className="h-56" src={image} alt="img" />
        <h2 className="m-5 text-center font-bold">{title}</h2>
       </div>
      </Link>
     
 

    </div>
  )
}

export default BrandCard