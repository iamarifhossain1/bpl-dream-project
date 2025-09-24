import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise, setAvailableBalance, availableBalance, purchasedPlayer, setPurchasedPlayer}) => {
    const players = use(playersPromise);
    return (
       
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
        
        {
            players.map(player => <PlayerCard key={player.id} player={player} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer}></PlayerCard>)
        }

        </div>
    );
};

export default AvailablePlayers;