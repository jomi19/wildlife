import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import config from "../../config.json";
import { useDog, useSettings, useDogUpdate } from "../../context";
import { IDog, IInfoBlock, Imh } from "./../../models/";
import { NumberInput, TextInput } from "./../../components/inputs";

interface IForm {
	name?: string;
	pictureUrl?: string;
	born?: Date;
	mh?: Imh;
	infoBlock?: Array<IInfoBlock>;
	_id?: any;
}

export default function EditDog() {
	const [form, setForm] = useState<IForm>({});
	const params = useParams();
	const dogs = useDog();
	const name = params.name;
	const inputClasses = "p-1 mx-2 rounded border-2 border-green-200 col-span-3";
	const labelClasses = "text-right col-span-1";

	let dog: IDog | undefined;
	if (name !== "new" && dogs !== null && dog === undefined) {
		dog = dogs.find((d) => d.name.toLowerCase() === name?.toLowerCase());
		if (dog && form.name === undefined) {
			setForm(dog);
		}
	}

	function changeHandler(
		e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;
		setForm({ ...form, [name]: value });
	}

	return (
		<form className="flex flex-col gap-7   py-10">
			<TextInput
				name="name"
				changeHandler={changeHandler}
				value={form.name || ""}
				label="Namn"
			/>
			<EditMh form={form} setForm={setForm} />
		</form>
	);
}

interface IEditMh {
	form: IForm;
	setForm: Function;
}

function EditMh({ form, setForm }: IEditMh) {
	const [show, setShow] = useState<boolean>(false);
	const mhMax = 5;
	let mh: Imh = form.mh || {
		curiosity: 0,
		aggression: 0,
		social: 0,
		hunting: 0,
		playfulness: 0,
	};

	function changeHandler(e: React.FormEvent<HTMLInputElement>) {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;

		// @ts-ignore
		mh[name] = parseInt(value);
		setForm({ ...form, mh: mh });
	}
	return (
		<div className="col-span-6">
			<label htmlFor="showMh" className="pr-2 pb-4">
				Mh
			</label>
			<input type="checkbox" name="showMh" onChange={(e) => setShow(!show)} />

			{show ? (
				<div className="flex flex-col py-4 border-2 p-2 col-span-2 rounded">
					<NumberInput
						value={mh.curiosity}
						changeHandler={changeHandler}
						max={mhMax}
						name="curiosity"
						label="Nyfikenhet"
					/>
					<NumberInput
						value={mh.aggression}
						changeHandler={changeHandler}
						max={mhMax}
						name="aggression"
						label="Aggressivitet"
					/>
					<NumberInput
						value={mh.social}
						changeHandler={changeHandler}
						max={mhMax}
						name="social"
						label="Socialitet"
					/>
					<NumberInput
						value={mh.hunting}
						changeHandler={changeHandler}
						max={mhMax}
						name="hunting"
						label="Jaktintresse"
					/>
					<NumberInput
						value={mh.playfulness}
						changeHandler={changeHandler}
						max={mhMax}
						name="playfulness"
						label="Lekfullhet"
					/>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
