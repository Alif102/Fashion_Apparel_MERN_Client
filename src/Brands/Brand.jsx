/* eslint-disable react/prop-types */




const Brand = ({brandData}) => {
  const {title , image} = brandData;




  return (
    <div >

      <div className="card w-72 shadow-xl">
        <img className="h-56" src={image} alt="img" />
        <h2 className="m-5 text-center font-bold">{title}</h2>
       </div>
 

    </div>
  )
}

export default Brand