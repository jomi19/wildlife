export interface IDog {
	name: string;
	pictureUrl?: string;
	born: Date;
	mh?: Imh;
	infoBlock?: Array<IInfoBlock>;
	_id?: any;
}

export interface IInfoBlock {
	title: string;
	markdown?: string;
	sanitizedHtml?: string;
}

export interface Imh {
	curiosity: number;
	aggression: number;
	social: number;
	hunting: number;
	playfulness: number;
}
