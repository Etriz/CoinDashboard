import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Components/Layout';
import List from './Components/List';
import Graph from './Components/Graph';
import './App.css';

function App() {
  const [coinData, setCoinData] = useState({});
  const [defaultTen, setDefaultTen] = useState([]);

  useEffect(() => {
    (async function asyncFetch() {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1'
      );
      setDefaultTen(res.data);
      const first = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=1&page=1&sparkline=true`
      );
      setCoinData(first.data[0]);
    })();
  }, []);

  return (
    <Layout>
      <List defaultTen={defaultTen} setCoinData={setCoinData} />
      <Graph coinData={coinData} />
    </Layout>
  );
}

export default App;
