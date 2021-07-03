import React from 'react';


const Header=(props)=>{
const {countCartItems}=props;
  return(
    <header className='row block center'>
      <div>
      <a href='#shopping cart'>
        <h1>small shopping Cart</h1>
        </a>
        </div>
        <div>
          <a href='#cart'>
            Cart {' '}
            {countCartItems?(
              <button className='badge'>{countCartItems}</button>
            ):(
              ' '
            )}
            </a>{' '}
          <a href='#sign-in'>Sign-In</a>
          </div>
      </header>
  )
}
export default Header;