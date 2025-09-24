import React, { useState } from 'react';
import userImg from '../../assets/user.png'
import flagImg from '../../assets/report.png'
import { toast } from 'react-toastify';

const PlayerCard = ({player, setAvailableBalance, availableBalance, purchasedPlayer, setPurchasedPlayer}) => {

    const handleSelectPlayer = (playerData) => { 
        const playerPrice = parseInt(playerData.price.split('USD').join('').split(',').join(''))
        if (availableBalance < playerPrice) {
            toast('Not enough coins !!')
            return;
        }
        setIsSelected(true);
        setAvailableBalance(availableBalance - playerPrice);
        setPurchasedPlayer([...purchasedPlayer, playerData])
    }
    const [isSelected, setIsSelected] = useState(false);
    return (
       <div className="card bg-base-100 shadow-lg p-4">
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
                             <button disabled={isSelected} onClick={() => {handleSelectPlayer(player)}} className="btn ">{ isSelected === true ? "Selected" : "Choose Player"}</button>
                        </div>
                    </div>
                    
                </div>
            </div>
    );
};

export default PlayerCard;