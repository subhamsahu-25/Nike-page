import React from 'react'
import fkt from '../assets/fkt.png'
import amz from '../assets/amz.png'
import shoe from '../assets/shoe.png'
function Home() {
  return (
    <div className="flex items-start w-full">
      <div className="left w-[45%] justify-between items-center px-30 pb-10 pt-16">
        <h1 className="w-[70%] ml-24 text-7xl font-black text-black uppercase font-[Comic Sans MS] font-semibold">
          YOUR FEET
          <br />
          DESERVE
          <br />
          THE BEST
        </h1>
        <p className="text-sm ml-24 text-gray-500 mt-8 font-[Comic Sans MS] font-semibold">
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO
          <br />
          HELP YOU WITH OUR SHOES. YOUR FEET DESERVE
          <br />
          THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          <br />
          SHOES.
        </p>
        <div className="flex">
          <button className="gap-5 mt-5 ml-24 bg-red-600 font-[Comic Sans MS] text-white font-bold text-base w-40 h-12">
            Shop Now
          </button>
          <button className=" gap-5 ml-9 mt-5 ml-10 bg-white text-black font-[Comic Sans MS] font-bold text-base w-40 h-12 border border-gray-400">
            Category
          </button>
        </div>
        <p className="text-sm ml-24 font-[Comic Sans MS] text-gray-500 mt-5">
          Also Available On
        </p>
        <div className="mt-5 flex ml-24 items-center gap-5">
          <img src={fkt} alt="Flipkart" className="h-10 object-contain" />
          <img src={amz} alt="Amazon" className="h-10 object-contain" />
        </div>
      </div>
      <div className="right flex items-center px-10 pb-10 pt-16 mt-7">
        <img src={shoe} className="w-[580px] object-contain" alt="shoe image" />
      </div>
    </div>
  );
}

export default Home
