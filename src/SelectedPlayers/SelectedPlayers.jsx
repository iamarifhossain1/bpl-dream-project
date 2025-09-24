import React from 'react';
import SelectedCard from '../components/SelectedCard/SelectedCard';


const SelectedPlayers = ({purchasedPlayer, removePlayer }) => {
    
    return (
        <div className='max-w-7xl mx-auto '>
            {
                purchasedPlayer.map(player => <SelectedCard key={player.id} player={player} removePlayer={removePlayer}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;