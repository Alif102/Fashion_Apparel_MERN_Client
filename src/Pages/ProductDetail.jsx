/* eslint-disable react/prop-types */

const ProductDetail = ({detail}) => {
    const {_id,name} =detail
  return (
    <div>
        <h2>{_id}</h2>
        <h2>{name}</h2>
    </div>
  )
}

export default ProductDetail