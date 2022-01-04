import React from 'react';
//import LogInOut from './LogInOut';

const NavBar = ({handleClick, isClicked}) => {
  return (
    <nav className='topBar'>
      <button onClick={() => handleClick()}>
        {isClicked ? "Back": "Log In"}
      </button>
    </nav>
  )
}

export default NavBar;
