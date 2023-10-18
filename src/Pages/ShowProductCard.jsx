/* eslint-disable react/prop-types */

const ShowProductCard = ({product}) => {
    const {name,brand,type,image,description,price,rating} = product;

  return (
    <div>
        


<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{rating}</div>
    </h2>
    <p>{description}</p>
    <p>{brand}</p>
    <p>{type}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{price}</div> 
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">Add Product</button>
    </div>
  </div>
</div>



{/* jj */}


    </div>
  )
}

export default ShowProductCard