import type { CryptoStrategy } from '../types/crypto';

export const calculateStrategy = (
	coin: string,
	buyPrice: number,
	investSumUsdt: number,
	targetPercent: number
): CryptoStrategy => {

	const averagingPrice = buyPrice * 0.90;
	const sellPrice = buyPrice * (1 + targetPercent / 100);

	const coinAmount = investSumUsdt / buyPrice;
	const sellSumAfter = coinAmount * sellPrice;

	const buyFee = investSumUsdt * 0.00075;
	const sellFee = sellSumAfter * 0.00075;
	const transactionFee = buyFee + sellFee;

	const netProfit = sellSumAfter - investSumUsdt - transactionFee;

	return {
		id: crypto.randomUUID(),
		coin: coin.toUpperCase(),
		buyPrice,
		sellPrice,
		averagingPrice,
		targetPercent,
		investSumUsdt,
		sellSumAfter,
		coinAmount,
		transactionFee,
		netProfit
	};
};