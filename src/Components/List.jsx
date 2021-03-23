import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const List = ({ coinData, defaultTen }) => {
  const [activeCoin, setActiveCoin] = useState(coinData.name);

  useEffect(() => {
    defaultTen ? setActiveCoin(defaultTen[0].name) : setActiveCoin('');
  }, [defaultTen]);

  const makeActiveCoin = (coinName) => {
    setActiveCoin(coinName);
  };

  const makeList = () => {
    return defaultTen?.map((coin) => {
      return (
        <Button
          variant="dark"
          onClick={() => makeActiveCoin(coin.name)}
          active={activeCoin === coin.name ? true : false}>
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
