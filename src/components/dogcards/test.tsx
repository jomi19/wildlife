import React from "react";
import parse from "html-react-parser";

interface iContent {
	html: string;
	cardNumber?: number;
	heading?: string;
}

export default function sadasd({ html, cardNumber }: iContent) {
	return (
		<div className="w-full">
			asd
			<div className="w-1/2">
				<div>asd</div>
				{parse(html)}
			</div>
			<div className="w-1/2"></div>
		</div>
	);
}
