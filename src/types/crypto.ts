export interface CryptoStrategy {
	id: string;
	coin: string;
	buyPrice: number;
	sellPrice: number;
	averagingPrice15: number;
	targetPercent: number;
	investSumUsdt: number;
	sellSumAfter: number;
	coinAmount: number;
	transactionFee: number;
	netProfit: number;
}