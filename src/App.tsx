import { FC } from 'react';

import './style.css';
import StockData from './components/stock-data/index.js';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <StockData />
    </div>
  );
};
