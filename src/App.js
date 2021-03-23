import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Components/Layout';
import List from './Components/List';
import './App.css';

function App() {
  const [coinData, setCoinData] = useState([]);
  const [defaultTen, setDefaultTen] = useState();

  useEffect(() => {
    (async function asyncFetch() {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&sparkline=true'
      );
      setCoinData(res.data[0]);
      setDefaultTen(res.data);
    })();
  }, []);
  return (
    <Layout>
      <List coinData={coinData} defaultTen={defaultTen} />
    </Layout>
  );
}

export default App;
