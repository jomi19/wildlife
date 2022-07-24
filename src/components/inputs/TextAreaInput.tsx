import React from "react";
import IInput, { inputClasses, labelClasses } from "./InputSettings";

interface ITextArea extends IInput {
	rows?: number;
	value: string;
}
export default function TextAreaInput({
	label,
	value,
	changeHandler,
	rows = 10,
	name,
	required = false,
}: ITextArea) {
	return (
		<>
			{label ? (
				<label htmlFor={name} className={labelClasses}>
					{label}
				</label>
			) : (
				<></>
			)}

			<textarea
				className={inputClasses}
				rows={rows}
				name={name}
				onChange={(e) => changeHandler(e)}
				value={value}
			></textarea>
		</>
	);
}
