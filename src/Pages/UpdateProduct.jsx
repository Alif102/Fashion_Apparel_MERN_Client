// import StarRatings from 'react-star-ratings';
import { useLoaderData } from 'react-router-dom';
import '../Components/Style.css';
import '../Pages/Pages.css'
import Swal from 'sweetalert2';
// import { useState } from "react";
//  import Swal from 'sweetalert2'

const UpdateProducts = () => {

    const details = useLoaderData()
  const {_id,name,brand,type,image,description,price} = details


 
   
      const handleSubmit = (event) => {
        

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const description = form.description.value;
        const image = form.image.value;
        const price = form.price.value;
        // const rating = form.rating.value;

        const product = { name, brand, type, description, image, price }


        console.log(product)
        // http://localhost:5173/updateProduct/6530df0ebada6250c6ab521d

        fetch(`http://localhost:5000/productss/${_id}`,{
      method: 'PUT',headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(product)
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
      if (data.modifiedCount>0){
        Swal.fire({
                title: 'Success!',
                text: 'Product Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
          })
  .catch(err=>console.error(err))




  

    
    
  };
  return (
    <div>
    



      <div className="hero min-h-screen bg-base-200">
   
    <div className="card">
    <h1 className="text-center yongSerif mt-5 mb-4">Update Product</h1>

      <form className="card-body] space-y-4" onSubmit={handleSubmit}>
        <div className='md:flex gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input className="input input-bordered" type="text" id="image" defaultValue={image} name="image" accept="image/*" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input className="input input-bordered" type="text" id="name" defaultValue={name} name="name" accept="image/*" required />
          
        </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input  className="input input-bordered" type="text" id="brand" defaultValue={brand} name="brand" accept="image/*" required/>
        </div>

        <div className='md:flex gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input className="input input-bordered" type="number" id="price" defaultValue={price} name="price" accept="image/*" required />
        </div>

        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Raiting :</span>
          </label>

          <select 
          className="input input-bordered" name="rating" type="number"  id="rating" defaultValue={rating}  step="0.1"            >
            <option value={1}> ⭐</option>
            <option value={2}>⭐ ⭐ </option>
            <option value={3}>⭐ ⭐ ⭐</option>
            <option value={4}>⭐ ⭐ ⭐ ⭐</option>
            <option value={5}>⭐ ⭐ ⭐ ⭐ ⭐</option>
          </select> */}

          
         
          {/* <input className="input input-bordered" name="rating" type="number"  id="rating" defaultValue={rating}  step="0.1"    /> */}
        {/* </div> */}
        </div>
        <div className="form-control">
        <label htmlFor="type">Type:</label>
        <select className="input input-bordered" id="type" defaultValue={type} name="type">
          <option value="T-shirt">T-Shirt</option>
          <option value="Shoe">Shoe</option>
          <option value="Swimsuit">Swimsuit</option>
          <option value="Jeans">Jeans</option>
          <option value="Sweater">Sweater</option>
           
          {/* Add more options as needed */}
        </select>
        </div>

        

        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea className="input input-bordered" type="text" id="description" defaultValue={description} name="description" accept="image/*" required></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Product</button>
        </div>
      </form>
    
  </div>
</div>

    </div>
  )
}

export default UpdateProducts


// import { useState } from "react";
// import { useLoaderData } from "react-router-dom"
// import Swal from "sweetalert2";

// const UpdateProduct = () => {
//   const details = useLoaderData()
//   const {name,brand,type,image,description,price,rating} = details