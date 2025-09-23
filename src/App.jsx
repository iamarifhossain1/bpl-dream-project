import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
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
      
      {/* Available Players */}

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      {/* Selected Players */}

      <SelectedPlayers></SelectedPlayers>

    </>
  )
}

export default App
