import React from "react";
import IInput, { inputClasses, labelClasses } from "./InputSettings";

interface INumberInput extends IInput {
	max?: number;
	min?: number;
	value: number;
}

export default function NumberInput({
	max,
	min = 0,
	name,
	changeHandler,
	value,
	label,
	required = false,
}: INumberInput) {
	const labelClasses = "text-center p-1";
	const inputClasses = "p-1 border-2 border-green-200 rounded";
	return (
		<>
			{label ? (
				<label htmlFor={name} className={labelClasses}>
					{label}
				</label>
			) : (
				<></>
			)}

			<input
				type="number"
				value={value}
				onChange={(e) => changeHandler(e)}
				name={name}
				className={inputClasses}
				max={max}
				min={min}
			/>
		</>
	);
}
