import type { CryptoStrategy } from '../types/crypto';

export const calculateStrategy = (
	coin: string,
	buyPrice: number,
	investSumUsdt: number,
	targetPercent: number
): CryptoStrategy => {

	const averagingPrice15 = buyPrice * 0.85;
	const sellPrice = buyPrice * (1 + targetPercent / 100);
	const coinAmount = investSumUsdt / buyPrice;
	const sellSumAfter = coinAmount * sellPrice;
	const transactionFee = investSumUsdt * 0.001;
	const netProfit = sellSumAfter - investSumUsdt - transactionFee;

	return {
		id: crypto.randomUUID(),
		coin: coin.toUpperCase(),
		buyPrice,
		sellPrice,
		averagingPrice15,
		targetPercent,
		investSumUsdt,
		sellSumAfter,
		coinAmount,
		transactionFee,
		netProfit

	};
};