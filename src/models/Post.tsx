export interface Post {
	title: string;
	id?: number;
	markdown: string;
	created: Date;
	slug?: String;
	_id?: any;
	sanitizedHtml?: string;
}
