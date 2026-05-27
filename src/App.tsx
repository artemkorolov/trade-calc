import { useState } from 'react';
import { StrategyForm } from './components/StrategyForm';
import { calculateStrategy } from './utils/calculators';
import type { CryptoStrategy } from './types/crypto';
import './App.css';

function App() {
  const [strategies, setStrategies] = useState<CryptoStrategy[]>([]);

  const handleAddStrategy = async (coin: string, buyPrice: number, investSum: number, target: number) => {
    try {
      const respons = await fetch('http://localhost:5000/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coin,
          buyPrice,
          investSumUsdt: investSum,
          targetPercent: target,
        }),
      });

      if (!respons.ok) {
        throw new Error('Помилка сервера під час розрахунку');
      }

      const newStrategy: CryptoStrategy = await respons.json();

      setStrategies((prev) => [newStrategy, ...prev]);

    } catch (error) {
      console.error('Бекенд недоступний. Вмикаю локальний калькулятор.', error);

      const fallBackStrategy = calculateStrategy(coin, buyPrice, investSum, target);

      setStrategies((prev) => [fallBackStrategy, ...prev]);
    }
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
                <p>Ціна усереднення (-10%): <strong>{strat.averagingPrice.toFixed(2)} $</strong></p>
                <p>Кількість монет: <strong>{strat.coinAmount.toFixed(2)}</strong></p>
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
