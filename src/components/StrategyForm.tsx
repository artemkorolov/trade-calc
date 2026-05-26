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
	const [target, setTarget] = useState('5')

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (!coin || !buyPrice || !investSum) {
			return;
		}

		onAddStrategy(coin, Number(buyPrice), Number(investSum), Number(target));
		setCoin('');
		setBuyPrice('');
		setInvestSum('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Coin"
				value={coin}
				onChange={(event) => setCoin(event.target.value)}
			/>
			<input
				type="number"
				placeholder="Buy Price"
				value={buyPrice}
				onChange={(event) => setBuyPrice(event.target.value)}
			/>
			<input
				type="number"
				placeholder="Investment Amount"
				value={investSum}
				onChange={(event) => setInvestSum(event.target.value)}
			/>
			<input
				type="number"
				placeholder="Target (%)"
				value={target}
				onChange={(event) => setTarget(event.target.value)}
			/>

			<button type="submit">Calculate</button>
		</form>
	)


}