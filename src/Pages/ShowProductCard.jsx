/* eslint-disable react/prop-types */

const ShowProductCard = ({product}) => {
    const {name,brand,type,image,description,price,rating} = product;

  return (
    <div>
        


{/* <div className="card w-[380px] h-[450px] bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
    <h2>Brand : {brand}</h2>
    <p>{description}</p>
    <p>Brand :{brand}</p>
    <h2>Price : {price}</h2>
    <div className="card-actions justify-end">
      <h2>{type}</h2>
      <div className="badge badge-outline">Rating : {rating}</div> 
    </div>
    <div className="card-actions flex gap-3">
      <button className="btn btn-primary">View Details</button>
      <button className="btn btn-info">Update</button>

    </div>
  </div>
</div> */}



{/* jj */}
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
  <h2>Raiting : {rating}</h2>
  </div>


</div>


    </div>
  )
}

export default ShowProductCard