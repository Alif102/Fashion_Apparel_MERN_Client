// // import TopPicks from "../Components/TopPicks"
import OurBrands from "../Components/OurBrands"
import { useLoaderData } from "react-router-dom"


const Home = () => {
  const brands = useLoaderData()
  return (
    <div>
      {/* <Banner/> */}
      <OurBrands brands={brands} ></OurBrands>
      {/* <TopPicks/> */}
      
    </div>
  )
} 

export default Home