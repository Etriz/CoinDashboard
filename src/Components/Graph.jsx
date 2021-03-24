import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Card } from 'react-bootstrap';

const Graph = ({ coinData }) => {
  //   console.log('coin', coinData);

  return (
    <Card bg="dark" className="m-3 py-3" style={{ width: '100%', height: '100%' }}>
      {coinData.id ? (
        <>
          <span className="px-3 mb-3">{`now viewing ${coinData.name} data`}</span>
          <Sparklines data={coinData.sparkline_in_7d.price} margin={0}>
            <SparklinesLine style={{ fill: 'none', strokeWidth: '.75' }} />
          </Sparklines>
        </>
      ) : null}
    </Card>
  );
};

export default Graph;
