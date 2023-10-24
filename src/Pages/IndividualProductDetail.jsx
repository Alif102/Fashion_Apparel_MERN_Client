/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const IndividualProductDetail = ({details}) => {
    const {_id,name,brand,type,image,description,price} = details

  return (
    <div className="w-[1000px] mx-auto">
        <h1 className=" m-11 youngSerif text-3xl">Product Details</h1>
    

    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{type}</p>
    <p>{description}</p>
    <div className='flex gap-7 justify-between'>
        <h2 className='font-bold'>{brand}</h2>
    <p>$ {price}</p>

    </div>
    {/* <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            name='rating'
            
            
          /> */}
    <div className="card-actions justify-center">
    <Link to={`/myCart/${_id}`}>
    <button className="btn btn-primary">Add to Cart</button>


    </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default IndividualProductDetail