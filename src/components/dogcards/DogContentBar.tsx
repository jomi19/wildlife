import React from "react";
import parse from "html-react-parser";
import { useState } from "react";
import { useSettings } from "../../context";
import { IDog, IInfoBlock } from "../../models";

interface IContentBar {
	title: string;
	content: string;
}

export default function DogContentBar({ title, content }: IContentBar) {
	if (content) {
		return (
			<div className="w-full">
				<h1>{title}</h1>
				<div className="w-1/2">{parse(content)}</div>
				<div className="w-1/2"></div>
			</div>
		);
	}

	return <></>;
}
