// import { useLoaderData } from "react-router-dom"
import CartCard from "./CartCard";
import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";

const MyCart = () => {
    // const carts = useLoaderData();
    const [RemoveCarts, setRemoveCarts] = useState([]);
    let {user} = UseAuth();
    let email = user.email;
    useEffect(()=> {
      fetch(`http://localhost:5000/carts/${email}`)
      .then(res => res.json())
      .then(data => setRemoveCarts(data))
    } ,[email]) 

     


  return (
    <div>
        {/* carts {carts.length} */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-20 ">
          
            { RemoveCarts.length > 0 ?
                RemoveCarts.map(cart => <CartCard
                     key={cart._id}
                     cart={cart}
                     RemoveCarts={RemoveCarts}
                     setRemoveCarts={setRemoveCarts} ></CartCard>) 
                     :     
          <h2 className="m-10 text-3xl text-center">No Cart Available</h2>

            }
        </div>
    </div>
  )
}

export default MyCart