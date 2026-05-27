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
    <div className='app-container'>
      <h1>Крипто Калькулятор Стратегій</h1>
      <StrategyForm onAddStrategy={handleAddStrategy} />
      <div>
        <h2>Результат</h2>
        {strategies.length === 0 ? (
          <p>Додайте першу монету для розрахунку...</p>
        ) : (
          <div className='result-grid'>
            {strategies.map((strat) => (
              <div key={strat.id}>
                <h3>Монета: {strat.coin}</h3>
                <p>Ціна покупки: <strong>{strat.buyPrice} $</strong></p>
                <p>Ціна продажу: (+{strat.targetPercent}%): <strong>{strat.sellPrice.toFixed(2)} $</strong></p>
                <p>Ціна усереднення (-15%): <strong>{strat.averagingPrice15.toFixed(2)} $</strong></p>
                <p>Кількість монет: {strat.coinAmount.toFixed(4)}</p>
                <p>Чистий прибуток: <strong>+{strat.netProfit.toFixed(2)} $</strong></p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
