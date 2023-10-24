// import StarRatings from 'react-star-ratings';
import { useLoaderData } from 'react-router-dom';
import '../Components/Style.css';
import '../Pages/Pages.css'
import { useState } from "react";
 import Swal from 'sweetalert2'
 

const Update = () => {
  const {_id, name,brand,type,description,price, image} = useLoaderData();


    const [product, setProduct] = useState({
        image: '',
        name: '',
        brand: '',
        type: 'T-shirt',
        price: '',
        description: '',
       
        
      
      });
    
      const handleChange = (e) => {
        const { name, value  } = e.target;
        setProduct({ ...product, [name]: value });
      };
      
      
    
     
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/productss/${_id}`, {
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      }, 
      body : 
        JSON.stringify(product)
      
    })

    
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount>0){
        Swal.fire({
          title: 'Success!',
          text: 'Product Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
    // You can handle form submission logic here, e.g., sending data to the server.
    console.log('Form data submitted:', product);
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
          <input className="input input-bordered" type="text" defaultValue={image} id="image" name="image" accept="image/*" required onChange={handleChange} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input className="input input-bordered" type="text" defaultValue={name} id="name" name="name" accept="image/*" required onChange={handleChange} />
          
        </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input  className="input input-bordered" type="text" defaultValue={brand} id="brand" name="brand" accept="image/*" required onChange={handleChange} />
        </div>

        <div className='md:flex gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input className="input input-bordered" type="text" defaultValue={price} id="price" name="price" accept="image/*" required onChange={handleChange} />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Raiting :</span>
          </label>
          {/* <select
          className="input input-bordered text-3xl text-red-400 font-bold" 

type="text" defaultValue={rating} id="rating" name="rating" accept="image/*" required onChange={handleChange} >           <option value={1}> ⭐</option>
            <option value={2}>⭐ ⭐ </option>
            <option value={3}>⭐ ⭐ ⭐</option>
            <option value={4}>⭐ ⭐ ⭐ ⭐</option>
            <option value={5}>⭐ ⭐ ⭐ ⭐ ⭐</option>
          </select> */}
         
          
          
{/*          
            <StarRatings
          rating={product.rating}
          starRatedColor="blue"
          changeRating={handleRatingChange}
          // numberOfStars={5}
          name='rating'
        /> */}

          
         
          {/* <input className="input input-bordered"  type="number" id="rating" name="rating" step="0.1" required value={product.rating} onChange={handleChange} /> */}
        </div>
        </div>
        <div className="form-control">
        <label htmlFor="type">Type:</label>
        <select className="input input-bordered" type="text" defaultValue={type} id="type" name="type" accept="image/*" required onChange={handleChange}>
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
          <textarea className="input input-bordered" 
              type="text" defaultValue={description} id="brand" name="brand" accept="image/*" required onChange={handleChange}
              
      ></textarea>
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

export default Update


