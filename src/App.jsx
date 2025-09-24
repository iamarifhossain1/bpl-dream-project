import { Suspense, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { ToastContainer } from 'react-toastify';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import SelectedPlayers from './SelectedPlayers/SelectedPlayers'

const loadPlayers = async () => { 
  const fetchPlayers = await fetch('/players.json');
  const response = await fetchPlayers.json();
  return response;
}

const playersPromise = loadPlayers();

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(1000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  const removePlayer = (p) => { 
  
    const filterdData = purchasedPlayer.filter(filterPlayer => filterPlayer.id !== p.id);
    console.log(filterdData);
    setPurchasedPlayer(filterdData)
    setAvailableBalance(availableBalance + parseInt(p.price.split('USD').join('').split(',').join('')))

  }
  
  return (
    <>
      {/* Nav Bar */}

      <Navbar availableBalance={availableBalance}></Navbar>

      {/* Banner */}

      <Banner></Banner>
      
      {/* Available Players */}
       <div className='max-w-7xl mx-auto flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-bold'>{toggle === true ? "Available Players" : `Selected Player (${purchasedPlayer.length}/6)`}</h1>
        <div className=''>
          <button onClick={() => setToggle(true)} className={`${toggle === true ? 'bg-[#E7FE29]' : ''} font-semibold py-3 px-5 border-1 border-gray-400 rounded-l-xl border-r-0 cursor-pointer`}>Available</button>
          <button onClick={() => setToggle(false)} className={`${toggle === false ? 'bg-[#E7FE29]' : ''} font-semibold py-3 px-5 border-1 border-gray-400 rounded-r-xl border-l-0 cursor-pointer`}>Selected <span>{purchasedPlayer.length}</span></button>
        </div>
       </div>

      {
        toggle === true ?  <Suspense fallback={<span className="loading loading-spinner loading-xl "></span>}>
        <AvailablePlayers playersPromise={playersPromise} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer}></AvailablePlayers>
      </Suspense> : <SelectedPlayers purchasedPlayer={purchasedPlayer} removePlayer={removePlayer}></SelectedPlayers>
      }


      <ToastContainer/>

    </>
  )
}

export default App
