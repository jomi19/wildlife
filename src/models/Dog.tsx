export interface IDog {
	name: string;
	pictureUrl?: string;
	born: Date;
	hd?: string;
	mh?: Imh;
	prices?: string;
	_id?: any;
	sanitizedPrices?: string;
	sanitizedHd?: string;
}

export interface Imh {
	curiosity: Number;
	aggression: Number;
	social: Number;
	hunting: Number;
	playfulness: Number;
}
