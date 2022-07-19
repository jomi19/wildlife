import React from "react";
import parse from "html-react-parser";
import { useState } from "react";
import { useSettings } from "../../context";
import { IDog } from "../../models";

interface iContent {
	html: string | undefined;
	rawText: string | undefined;
	cardNumber?: number;
	heading?: string;
	name: string;
}

export default function DogContentBar({
	html,
	rawText,
	name,
	heading,
}: iContent) {
	const webSettings = useSettings();
	const token = webSettings?.token || "";
	const [edit, setEdit] = useState<boolean>(false);
	const [textValue, setTextValue] = useState<string>(rawText || "");
	console.log(html);

	if (html) {
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

	return <></>;
}
