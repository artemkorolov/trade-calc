export interface CryptoStrategy {
	id: string;
	coin: string;
	buyPrice: number;
	sellPrice: number;
	averagingPrice: number;
	targetPercent: number;
	investSumUsdt: number;
	sellSumAfter: number;
	coinAmount: number;
	transactionFee: number;
	netProfit: number;
}