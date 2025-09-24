import React, { use } from 'react';
import userImg from '../../assets/user.png'
import flagImg from '../../assets/report.png'

const AvailablePlayers = ({playersPromise}) => {
    const players = use(playersPromise);
    
    console.log(players);
    
    return (
       
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
        
        {
            players.map(player => <div key={player.id} className="card bg-base-100 shadow-sm p-4">
                <figure><img className='rounded-xl w-96 h-60' src={player.image} /></figure>
                <div className="mt-4">
                    <div className='flex items-center'>
                        <img className='w-5' src={userImg} alt="" /><h2 className="card-title ml-2">{player.name}</h2>
                    </div>
                    <div className='flex justify-between items-center mt-3 border-b-2 border-gray-100 pb-2'>
                        <div className='flex items-center gap-2'>
                            <img className='w-5 h-5' src={flagImg} alt="" />
                            <p className='text-lg text-gray-400'>{player.country}</p>
                        </div>
                        <button className='btn'>{player.role}</button>
                    </div>

                    <div className='space-y-3 mt-2'>
                        <div className='flex items-center justify-between'>
                            <p className='font-semibold'>Rating</p>
                            <p>{player.rating}</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='font-semibold'>{player.battingstyle}</p>
                            <p className='text-gray-500'>{player.bowlingstyle}</p>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p className='font-semibold'>Price: ${player.price}</p>
                             <button className="btn ">Choose Player</button>
                        </div>
                    </div>
                    
                </div>
            </div>)
        }

        </div>
    );
};

export default AvailablePlayers;