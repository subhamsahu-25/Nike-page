import React from 'react'
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <div className="w-full p-3 bg-gray-100 flex justify-between items-center">
      <div className="left w-12 h-12 flex items-center ml-12 content-center">
        <img src={logo} alt="nike-logo" />
      </div>
      <div className="center w-12 h-12 flex -ml-[21vw] gap-[3.8vw] items-center font-[Comic Sans MS] text-xs font-semibold">
        <h3>MENU</h3>
        <h3>LOCATION</h3>
        <h3>ABOUT</h3>
        <h3>CONTACT</h3>
      </div>
      <div className="right bg-red-600 text-white mr-12 font-[Comic Sans MS] text-xs font-bold px-4 py-2">login</div>
    </div>
  );
}

export default Navbar
