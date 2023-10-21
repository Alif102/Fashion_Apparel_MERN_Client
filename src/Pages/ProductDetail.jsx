/* eslint-disable react/prop-types */
  import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'


const ProductDetail = ({detail}) => {
  const {_id,name,brand,type,image,description,price,rating} = detail



  
  return (
    <div> 
      
        <div className="card bg-base-200 p-3">
        
  <img className="ml-7 w-60 rounded-2xl" src={image} alt="img" />
  
  <h2 className="mt-3 font-bold text-2xl">{name}</h2>
  <div className="flex justify-between mb-2 mt-3">
  <h2 className=" yongSerif text-purple-500">Brand: {brand}</h2>
  <h2>Type : {type}</h2>
  </div>
  <h2 className="robotoMono">{description}</h2>
  
  <div className="flex justify-between mt-3 mb-3">
  <h2 className="font-bold text-purple-500">Price : ${price}</h2>
   <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            name='rating'
            
            
          />
         
  </div>
  <div className="card-actions gap-6 justify-center">
      <div className="btn btn-accent">Update</div> 
      <Link to={`/detail/${_id}`}>
      <div className="btn btn-neutral">Details</div>
      </Link>
    </div>


</div> 
    </div>
  )
}

export default ProductDetail