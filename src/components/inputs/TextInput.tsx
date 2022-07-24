import React from "react";
import IInput, { inputClasses, labelClasses } from "./InputSettings";

interface ITextInput extends IInput {
	value: string;
}

export default function TextInput({
	changeHandler,
	name,
	value,
	label,
	required = false,
}: ITextInput) {
	return (
		<>
			{label ? (
				<label htmlFor={name} className="text-center">
					{label}
				</label>
			) : (
				<></>
			)}

			<input
				type="text"
				name={name}
				required
				className={inputClasses}
				onChange={(e) => changeHandler(e)}
				value={value}
			/>
		</>
	);
}
