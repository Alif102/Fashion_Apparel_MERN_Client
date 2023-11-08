/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";

const IndividualProductDetail = ({details}) => {
  let {user} = UseAuth();
 
    const {name,brand,type,image,description,price,rating} = details

    const handleCart = () => {
      // e.preventDefault();
      console.log(details)

      fetch('https://coffe-server-backend.vercel.app/carts', {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    }, 
    body : JSON.stringify({details, email: user.email })  
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.insertedId){
       Swal.fire({
        title: 'Success!',
        text: 'Product Added Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  })
  // You can handle form submission logic here, e.g., sending data to the server.
  console.log('Form data submitted:', details);
};


  return (
    <div className="w-[800px] mx-auto">
        <h1 className=" m-11 youngSerif text-3xl text-center font-bold">Product Details</h1>
    

    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className=" w-44 rounded-md" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{type}</p>
    <p>{description}</p>
    <div className='flex gap-7 justify-between'>
        <h2 className='font-bold'>{brand}</h2>
    <p>$ {price}</p>

    </div>
    <h2>Ratings : <span className='text-red-500 font-bold'>{rating}</span></h2>

    {/* <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            name='rating'
            
            
          /> */}
    <div className="card-actions justify-center">
    {/* <Link to={`/product/${_id}`}>
    <button className="btn btn-primary">Add to Cart</button>
</Link> */}

    <button onClick={handleCart} className="btn btn-primary">Add to Cart</button>

    </div>
  </div>
</div>
    </div>
  )
}

export default IndividualProductDetail