import React from 'react';


const Basket=(props)=>{
const {cart,onAdd,onRemove}=props;
const price=cart.reduce((a,c)=>a+c.price*c.quantity,0);
const tax=(price*.14);
const shippingPrice=price>2000 ?0:50;
const totalPrice=(price+tax+shippingPrice);
  return(
    <aside className='block col-1'>
      <h2>cart items</h2>
  <div>{cart.length===0 && <div>cart is empty</div>}</div>
  {
    cart.map(item=>
      <div key={item.id} className='row'>

       <div className='col-2'>
         {item.name}
          </div>
<div className='col-2'>
  <button className='add' onClick={()=>onAdd(item)}>+</button>
  <button className='remove' onClick={()=>onRemove(item)}>-</button>
    </div>
           <div className='col-2 text-right'>
              {item.quantity} x ${item.price.toFixed(2)}
              </div>
    </div>
    )
  }
  {cart.length !==0 &&(
    <>
      <hr></hr>
      <div className='row'>
           <div className='col-2'>item price</div>
           <div className='clo-1 text-right'>${price.toFixed(2)}</div>
        </div>
        <div className='row'>
           <div className='col-2'>tax price</div>
           <div className='clo-1 text-right'>${tax.toFixed(2)}</div>
        </div>
        <div className='row'>
           <div className='col-2'>shipping price</div>
           <div className='clo-1 text-right'>${shippingPrice.toFixed(2)}</div>
        </div>
        <div className='row'>
           <div className='col-2'>totalprice price</div>
           <div className='clo-1 text-right'>${totalPrice.toFixed(2)}</div>
        </div>
        <hr/>
        <div className='row check'>
             <button  onClick={()=>alert('implement check out')}>check-out</button>
          </div>
    </>
  )}
    </aside>
  )
}
export default Basket;