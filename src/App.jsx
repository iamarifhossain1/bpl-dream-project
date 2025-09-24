import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import SelectedPlayers from './SelectedPlayers/SelectedPlayers'

const loadPlayers = async () => { 
  const fetchPlayers = await fetch('/players.json');
  const response = await fetchPlayers.json();
  return response;
}

function App() {

  const playersPromise = loadPlayers();
  

  return (
    <>
      {/* Nav Bar */}

      <Navbar></Navbar>

      {/* Banner */}

      <Banner></Banner>
      
      {/* Available Players */}
       <h1 className='max-w-7xl mx-auto mb-10 text-2xl font-bold sora'>Available Players</h1>
      <Suspense fallback={<span className="loading loading-spinner loading-xl text-center"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      {/* Selected Players */}

      <SelectedPlayers></SelectedPlayers>

    </>
  )
}

export default App
