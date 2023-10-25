/* eslint-disable react/prop-types */
// import ProductSliderAdd from "./ProductSliderAdd";

const ProductSlider = () => {

  

  return (

    <div className="mt-10 mb-9 max-w-[900px] mx-auto">
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://cdn.grabon.in/gograbon/images/merchant/1549193767666.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://emailtuna.com/images/newsletter/eff/eff3c1acc94a8ebbe0fac7d801d80a06.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.summitmedia-digital.com/spotph/images/2017/01/16/WOS_011617_640.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>


      {/* <div className="grid md:max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-3 gap-3 ">
        {

          details.length > 0 ? 
          details.map(detail => <ProductSliderAdd key={detail._id}
            detail={detail}
          ></ProductSliderAdd>)
           : <h2 className="m-10 text-center">No Product Available</h2>

        }

      </div> */}
     





    </div>

  )
}

export default ProductSlider