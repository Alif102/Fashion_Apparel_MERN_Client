// import StarRatings from 'react-star-ratings';
import '../Components/Style.css';
import '../Pages/Pages.css'
import { useState } from "react";
 import Swal from 'sweetalert2'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesome icon component
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import the star icon

 

const AddProducts = () => {


    const [product, setProduct] = useState({
        image: '',
        name: '',
        brand: '',
        type: 'T-shirt',
        price: '',
        description: '',
        rating: 1
       
        
      
      });
    
      const handleChange = (e) => {
        const { name, value  } = e.target;
        setProduct({ ...product, [name]: value });
      };
      
      
    
     
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://coffe-server-backend.vercel.app/product', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      }, 
      body : 
        JSON.stringify(product)  
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
    console.log('Form data submitted:', product);
  };
  return (
    <div>
    



      <div className="hero min-h-screen bg-base-200">
   
    <div className="card">
    <h1 className="text-center yongSerif mt-5 mb-4">Add Product</h1>

      <form className="card-body] space-y-4" onSubmit={handleSubmit}>
        <div className='md:flex gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input className="input input-bordered" type="text" id="image" name="image" accept="image/*" required onChange={handleChange} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input className="input input-bordered" type="text" id="name" name="name" required value={product.name} onChange={handleChange} />
          
        </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" className="input input-bordered" id="brand" name="brand" required value={product.brand} onChange={handleChange} />
        </div>

        <div className='md:flex gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input className="input input-bordered" type="number" id="price" name="price" step="0.01" required value={product.price} onChange={handleChange} />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Raiting :</span>
          </label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="text-yellow-400 cursor-pointer">
                <input
                  type="radio"
                  id={`rating${value}`}
                  name="rating"
                  value={value}
                  className="sr-only"
                  onChange={handleChange}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`text-xl ${
                    value <= product.rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                />
              </label>
              ))}
              </div>
          </div>
         
          
          
          

          
         
          {/* <input className="input input-bordered"  type="number" id="rating" name="rating" step="0.1" required value={product.rating} onChange={handleChange} /> */}
        {/* </div> */}
        </div>
        <div className="form-control">
        <label htmlFor="type">Type:</label>
        <select className="input input-bordered" id="type" name="type" value={product.type} onChange={handleChange}>
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
          <textarea className="input input-bordered" id="description" name="description" required value={product.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Product</button>
        </div>
      </form>
    
  </div>
</div>

    </div>
  )
}

export default AddProducts


