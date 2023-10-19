/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


const OurBrandsCards = () => {
    const [data, setData] = useState([]);
    // const { _id} = brand;

    useEffect(() => {
        fetch('Brand.json') // Replace with the actual path to your JSON file
          .then((response) => response.json())
          .then((jsonData) => setData(jsonData))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

    

  return (
    
        <div>
    
        <p> {data.title}</p>
        
      </div>



  )
}

export default OurBrandsCards

{/* <div className="card-actions justify-end">
<Link to={`/details/${_id}`}>
<h2 className="card-title">hello</h2>

</Link>
</div> */}