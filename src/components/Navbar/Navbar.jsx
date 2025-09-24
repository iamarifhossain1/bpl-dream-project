import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/dollar.png'

const Navbar = () => {
    return (
        // Nav Bar
        <div className="navbar max-w-7xl mx-auto sora">
            <div className="flex-1">
            <a className=" text-xl"><img className='w-14' src={navImg} alt="" /></a>
            </div>
            <div className="flex items-center gap-1 font-medium">
            <span>6000000000</span>
            <span> Coin</span>
            <img src={dollarImg} alt="" />
            </div>
      </div>
   
    );
};

export default Navbar;