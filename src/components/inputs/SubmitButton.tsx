import React from "react";

interface ISubmitButton {
	name: string;
}

export default function SubmitButton({ name }: ISubmitButton) {
	return (
		<button
			type="submit"
			className="font-semibold bg-green-300 text-white rounded-full py-2"
		>
			{name}
		</button>
	);
}
