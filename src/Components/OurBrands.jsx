/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// import OurBrandsCards from "./OurBrandsCards"

const OurBrands = ({brands}) => {
    const {name, _id} = brands;
    const [data, setData] = useState([]);
    // const { _id} = brand;
    console.log(_id)

    useEffect(() => {
        fetch('http://localhost:5000/product') // Replace 'data.json' with the actual path to your JSON file.
          .then((response) => response.json())
          .then((data) => {
            setData(data);
        
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
    


    return (
        <div>
           
            
            <h2 className="text-center text-2xl">Our Brands {brands.name}</h2>
            {
                data.map(item => <div key={item._id}>
                    <Link to={`/details/${item._id}`}>
                     name {item.name}
                     </Link>
                     </div>)
            }
            <h2>{name}</h2>

      

      

            <div>
    
    
    
  </div>
{/*         
         <div className="grid mt-8 max-w-[1000px] mx-auto md:grid-cols-3 gap-5">
           

            

          
        </div> */}
        </div>
    )
}

export default OurBrands