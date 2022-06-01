import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='inline-block'>
       <div >
        {/* <NavLink to='/home' className='link' title='Home'>
          <h3>home</h3>
        </NavLink>

        <NavLink to='/my-transactions' className='/link' title='My Transactions'>
          <h3>my-transactions</h3>
        </NavLink>
        
        <NavLink to='/my-stocks' className='link' title='My Stocks'>
          <h3>my-stocks</h3>
        </NavLink>

        <NavLink to='/logout' className='link' title='logout'>
          <h3>logout</h3>
        </NavLink> */}

        <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/my-transactions">My Transactions</a></li>
        <li><a href="my-stocks">My Stocks</a></li>
        <li><a href="logout">Logout</a></li>
        </ul> 
      </div>
    </div>
   
  )
}

export default NavBar;