import React, { useState } from "react";

interface StrategyFormProps {
	onAddStrategy: (
		coin: string,
		buyPrice: number,
		investSum: number,
		target: number
	) => void;
}

export const StrategyForm = ({ onAddStrategy }: StrategyFormProps) => {
	const [coin, setCoin] = useState('');
	const [buyPrice, setBuyPrice] = useState('');
	const [investSum, setInvestSum] = useState('');
	const [target, setTarget] = useState('')

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (!coin || !buyPrice || !investSum || !target) {
			return;
		}

		onAddStrategy(coin, Number(buyPrice), Number(investSum), Number(target));
		setCoin('');
		setBuyPrice('');
		setInvestSum('');
	};

	return (
		<form onSubmit={handleSubmit} className="strategy-form">
			<input
				type="text"
				placeholder="Монета (напр. LINK)"
				value={coin}
				onChange={(event) => setCoin(event.target.value)}
			/>
			<input
				type="number"
				placeholder="Ціна покупки ($)"
				value={buyPrice}
				onChange={(event) => setBuyPrice(event.target.value)}
			/>
			<input
				type="number"
				placeholder="Сума інвестиції ($)"
				value={investSum}
				onChange={(event) => setInvestSum(event.target.value)}
			/>
			<input
				type="number"
				placeholder="Мета (%)"
				value={target}
				onChange={(event) => setTarget(event.target.value)}
			/>

			<button type="submit">Розрахувати</button>
		</form>
	)


}