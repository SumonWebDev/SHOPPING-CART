import React from 'react';


const Product=(props)=>{
const {product,onAdd}=props;
  return(
    <div>
      <img className='small' src={product.image} alt='product.name'/>
      <h3>{product.name}</h3>
      <h3>${product.price}</h3>
      <div>
        <button className='btn' onClick={()=>onAdd(product)}>Add To Cart</button>
        </div>
    </div>
  )
}
export default Product;