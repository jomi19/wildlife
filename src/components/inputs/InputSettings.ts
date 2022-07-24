export default interface IInput {
	name: string;
	changeHandler: Function;
	label?: string;
	required?: boolean;
}

export const inputClasses =
	"outline-1 outline outline-green-200 rounded py-1 px-2 col-span-1 focus:outline-4";
export const labelClasses = "";
