
import { useEffect, useState } from 'react';
import axios from 'axios'
import TableCoins from './components/TableCoins';
import SearchCoins from './components/SearchCoins';

function App() {

  const [ coins, setCoins ] = useState([])
  const [ search, setSearch ] = useState('') 

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    setCoins(res.data)
    console.log(res.data)
  }

  
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='container'>
      <div className="row">
        <SearchCoins setSearch={setSearch} />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  )
}

export default App
