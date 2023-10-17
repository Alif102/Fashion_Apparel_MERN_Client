import './Style.css'
const Banner = () => {
  return (
    <div>
        <div className="hero md:min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/F0PSkKf/ban1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"><span className='yongSerif'>Trendy</span> Fashion</h1>
      <p className="mb-5 robotoMono">Fashion is a term used interchangeably to describe the creation of clothing, footwear, accessories, cosmetics, and jewellery of different cultural aesthetics and their mix and match into outfits that depict distinctive ways of dressing (styles and trends) as signifiers of social status
              </p>
      <button className="btn yongSerif bg-yellow-400">Shop Now</button>
    </div>
  </div>

</div>
    </div>
  )
}

export default Banner