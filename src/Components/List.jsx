import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ButtonGroup, Button } from 'react-bootstrap';

const List = ({ defaultTen, setCoinData }) => {
  const [activeCoin, setActiveCoin] = useState('');

  useEffect(() => {
    defaultTen.length > 0 ? setActiveCoin(defaultTen[0].id) : setActiveCoin('');
  }, [defaultTen]);

  const makeActiveCoin = (id) => {
    setActiveCoin(id);
    fetchCoinData(id);
  };

  const fetchCoinData = async (id) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=1&page=1&sparkline=true`
    );
    setCoinData(res.data[0]);
  };

  const makeList = () => {
    return defaultTen?.map((coin) => {
      return (
        <Button
          key={coin.id}
          variant="dark"
          onClick={() => makeActiveCoin(coin.id)}
          active={activeCoin === coin.id ? true : false}>
          {coin.name}
        </Button>
      );
    });
  };

  return (
    <ButtonGroup className="mt-3" vertical>
      {makeList()}
    </ButtonGroup>
  );
};

export default List;
