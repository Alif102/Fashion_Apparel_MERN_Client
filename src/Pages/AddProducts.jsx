import { useState } from "react";

const AddProducts = () => {

    const [product, setProduct] = useState({
        image: '',
        name: '',
        brand: '',
        type: 'phone',
        price: '',
        description: '',
        rating: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/product', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      }, 
      body : 
        JSON.stringify(product)
      
    })

    
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    // You can handle form submission logic here, e.g., sending data to the server.
    console.log('Form data submitted:', product);
  };
  return (
    <div>
          <h1>Add Product</h1>
    

{/* hjj */}

      <div className="hero min-h-screen bg-base-200">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit}>
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

        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" className="input input-bordered" id="brand" name="brand" required value={product.brand} onChange={handleChange} />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input className="input input-bordered" type="number" id="price" name="price" step="0.01" required value={product.price} onChange={handleChange} />
        </div>
        <div className="form-control">
        <label htmlFor="type">Type:</label>
        <select className="input input-bordered" id="type" name="type" value={product.type} onChange={handleChange}>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="headphone">Headphone</option>
          {/* Add more options as needed */}
        </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Raiting :</span>
          </label>
          <input className="input input-bordered"  type="number" id="rating" name="rating" step="0.1" required value={product.rating} onChange={handleChange} />
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