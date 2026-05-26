import { useState } from 'react';
import { StrategyForm } from './components/StrategyForm';
import { calculateStrategy } from './utils/calculators';
import type { CryptoStrategy } from './types/crypto';
import './App.css';

function App() {
  const [strategies, setStrategies] = useState<CryptoStrategy[]>([]);

  const handleAddStrategy = (coin: string, buyPrice: number, investSum: number, target: number) => {
    const newStrategy = calculateStrategy(coin, buyPrice, investSum, target);

    setStrategies((prew) => [newStrategy, ...prew]);
  }

  return (
    <div>
      <h1>Crypto Strategy</h1>
      <StrategyForm onAddStrategy={handleAddStrategy} />
      <div>
        <h2>Results</h2>
        {strategies.length === 0 ? (
          <p>Add your first coin to calculate</p>
        ) : (
          <div>
            {strategies.map((strat) => (
              <div key={strat.id}>
                <h3>Coin: {strat.coin}</h3>
                <p>Buy Price: <strong>{strat.buyPrice} $</strong></p>
                <p>Target Price (+{strat.targetPercent}%): <strong>{strat.sellPrice.toFixed(2)} $</strong></p>
                <p>Averaging (-15%): <strong>{strat.averagingPrice15.toFixed(2)} $</strong></p>
                <p>Coin Amount: {strat.coinAmount.toFixed(4)}</p>
                <p>Net Profit: <strong>+{strat.netProfit.toFixed(2)} $</strong></p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
