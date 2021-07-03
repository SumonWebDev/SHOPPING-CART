import React from 'react';
import './App.css';
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles.css";
import data from './data'
import { useState } from "react";

function App() {
  const {products}=data;
  const [cart,setCart]=useState([]);  
  const onAdd=(product)=>{
    const exit=cart.find((x)=> x.id === product.id);
    if(exit){
      setCart(cart.map((x)=>x.id===product.id ? {...exit,quantity:exit.quantity+1}:x)
      );
    }else{
      setCart([...cart,{...product, quantity:1}]);
    }
  };
  const onRemove=(product)=>{
    const exit=cart.find((x)=>x.id === product.id);
    if(exit.quantity===1){
  setCart(cart.filter(x=>x.id !==product.id))
    }else{
      setCart(cart.map((x)=>x.id===product.id ? {...exit,quantity:exit.quantity-1}:x))
    }
  }
  return (
    
       <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Header countCartItems={cart.length}></Header>
      <div className='row'>
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cart={cart}></Basket>
        </div>
    </div>
    
  );
}

export default App;
