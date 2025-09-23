import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/dollar.png'

const Navbar = () => {
    return (
        <div class="navbar max-w-7xl mx-auto">
            <div class="flex-1">
            <a class="btn btn-ghost text-xl"><img className='w-14' src={navImg} alt="" /></a>
            </div>
            <div class="flex items-center gap-1 font-medium">
            <span>6000000000</span>
            <span> Coin</span>
            <img src={dollarImg} alt="" />
            </div>
      </div>
    );
};

export default Navbar;