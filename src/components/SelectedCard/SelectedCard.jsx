import React from 'react';
import deleteImg from '../../assets/delete.png'
const SelectedCard = ({player, removePlayer}) => {
    const handleRemove = () => { 
        removePlayer(player)
    }
    
    
    return (
        <div className='max-w-7xl mx-auto '>
            <div className='flex justify-between items-center bg-white shadow-lg border-1 border-gray-200 p-6 rounded-xl mt-4'>
                <div className='flex items-center gap-5'>
                    <img src={player.image} className='w-16 h-16 rounded-xl' alt="" />
                    <div>
                        <h1 className='text-lg font-bold'>{player.name}</h1>
                        <p className='text-base text-gray-500 '>{player.role}</p>
                    </div>
                </div>
                    <div>
                        <img onClick={handleRemove} src={deleteImg} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default SelectedCard;