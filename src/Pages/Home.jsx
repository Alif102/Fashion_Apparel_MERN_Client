import TopPicks from "../Components/TopPicks"
import Feature from "../Components/Features"
// import Brands from "../Brands/Brands"
import Banner from "../Components/Banner"
import Brands from "../Our/Brands"
import Footer from "../Components/Footer"


const Home = () => {
  return (
    <div>
      <Banner/>
      {/* <Brands /> */}
      <Brands />
      <Feature/>
        <TopPicks/>
        <Footer/>
      
    </div>
  )
} 

export default Home