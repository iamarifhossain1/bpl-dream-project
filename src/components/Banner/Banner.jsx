import React from 'react';
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto mt-6 bg-black bg-line rounded-3xl sora mb-20'>
           <div className="py-16">
                <div className="hero-content text-center">
                    <div className="">
                    <img className="mx-auto" src={bannerImg} alt=""/>
                    <p className="text-white text-4xl font-bold py-4">Assemble Your Ultimate Dream 11 Cricket Team</p>
                    <p className='text-gray-300 text-xl'>Beyond Boundaries Beyond Limits</p>
                    <div className='border-2 border-[#E7FE29] p-2 inline-block rounded-xl  mt-4'>
                        <button className="btn bg-[#E7FE29] border-none  rounded-xl">Claim Free Credit</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;