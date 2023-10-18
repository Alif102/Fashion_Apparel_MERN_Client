// import { useState } from "react";

// const AddProduct = () => {

//   const [product, setProduct] = useState({
//     image: '',
//     name: '',
//     brand: '',
//     type: 'phone',
//     price: '',
//     description: '',
//     rating: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('http://localhost:5000/product', {
//       method: 'POST',
//       headers:{
//         'content-type': 'application/json'
//       }, 
//       body : 
//         JSON.stringify(product)
      
//     })

    
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//     })
//     // You can handle form submission logic here, e.g., sending data to the server.
//     console.log('Form data submitted:', product);

//   };



//   const handleAddProduct = (event)=> {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const quantity = form.quantity.value;
    
//     const newProduct = {name,quantity};
//     console.log(newProduct)

//     fetch('http://localhost:5000/product', {
//       method: 'POST',
//       headers:{
//         'content-type': 'application/json'
//       }, 
//       body : 
//         JSON.stringify(newProduct)
      
//     })

    
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//     })

// }
//   return (
//     // <div>
//     //   <form onSubmit={handleAddProduct}>
//     //   <div className="md:flex gap-5 ">
//     //     <div className="form-control">
//     //       <label className="input-group">
//     //         <span>Name</span>
//     //         <input type="text" placeholder="Name" name="name" className="input input-bordered" />
//     //       </label>
//     //     </div>
//     //     <div className="form-control">
//     //       <label className="input-group">
//     //         <span>Quantity</span>
//     //         <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered" />
//     //       </label>
//     //     </div>
//     //   </div>
//     //   <button className="btn m-5 btn-secondary">
//     //   <input type="submit" value="Add" />

//     //   </button>
//     //   </form>
//     // </div>
//     <div>

//     </div>
//   )
// }

// export default AddProduct


const AddProduct = () => {
  const handleAddProduct = (event)=> {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    
    const newProduct = {name,quantity};
    console.log(newProduct)

    fetch('http://localhost:5000/product', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      }, 
      body : 
        JSON.stringify(newProduct)
      
    })

    
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

  }
  return (
    <div>
      <form onSubmit={handleAddProduct}>
      <div className="md:flex gap-5 ">
        <div className="form-control">
          <label className="input-group">
            <span>Name</span>
            <input type="text" placeholder="Name" name="name" className="input input-bordered" />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span>Quantity</span>
            <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered" />
          </label>
        </div>
      </div>
      <button className="btn m-5 btn-secondary">
      <input type="submit" value="Add" />

      </button>
      </form>
    </div>
  )
}

export default AddProduct