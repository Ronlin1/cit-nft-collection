import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react' ;
import axios from 'axios';
import Punklist from './components/Punklist.js';
import Main from './components/Main.js';
// import CustomConnect from './components/Connect';


function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  
  
  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xF7324C6CC41B2bfF5840Cad184A4D83DDc0E6f24&order_direction=asc')
      console.log(openSeaData.data.assets)
      setPunkListData(openSeaData.data.assets)
    }
  return getMyNfts()
  }, [])

  return (
  <div className='app'>
    <Header  />
    {
        punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk= {selectedPunk} />
          <Punklist punkListData={punkListData} setSelectedPunk = {setSelectedPunk} />
          </>
        )}
    
  </div>

  )
  
}

export default App;
