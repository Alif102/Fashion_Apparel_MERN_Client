/* eslint-disable react/prop-types */

const ShowProductCard = ({product}) => {
    const {name,quantity} = product;

  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  {/* <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure> */}
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{quantity}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ShowProductCard