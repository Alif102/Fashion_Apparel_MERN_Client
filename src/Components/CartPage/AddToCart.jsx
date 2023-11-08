import { useLoaderData } from "react-router-dom"

const AddToCart = () => {
    const service = useLoaderData();
    console.log(service)
    const {name} = service
  return ( 
    <div>
        <h2>{name}</h2>

    </div>
  )
}

export default AddToCart