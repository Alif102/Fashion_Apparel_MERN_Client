/* eslint-disable react/prop-types */

const MyCartCard = ({cartData}) => {
    const {name,price,image} = cartData
  return (
    <div className=" m-12 max-w-[1000px] mx-auto">
        

<div className="flex gap-6 justify-self-center items-center">
    <div >
    <img className="w-36 rounded-md" src={image} alt="img" />

    </div>
    <div>
        <h2>{name}</h2>
        <h2>$ {price}</h2>
         
</div>
<div>
<button className="btn btn-square btn-sm">
     <img src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png" alt="delete" />
      </button>   
       </div>
</div>
    </div>
  )
}

export default MyCartCard