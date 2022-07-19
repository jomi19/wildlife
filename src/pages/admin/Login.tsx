import React, { useState } from "react";
import { useSettings, useLogIn, useLogOut } from "./../../context";
import config from "../../config.json";

const API_URL = `${config.API_URL}user`;

export default function Login() {
	const settings = useSettings();
	const logIn = useLogIn();
	const logOut = useLogOut();
	const token = settings?.token;
	const [form, setForm] = useState<any>();
	const data = JSON.stringify(form);

	function submitHandler(e: React.SyntheticEvent) {
		e.preventDefault();
		fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: data,
		})
			.then((respons) => respons.json())
			.then((data) => {
				if (data.token) {
					logIn(data.token);
				}
			})
			.catch((err) => {});
	}

	function changeHandler(e: React.SyntheticEvent<HTMLInputElement>) {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;
		setForm({ ...form, [name]: value });
	}

	if (!token) {
		return (
			<div className="min-h-80vh content-center">
				<form
					onSubmit={submitHandler}
					className="lg:grid  lg:w-1/4 lg:grid-cols-6 self-center mx-auto my-5 bg-[#bac204] rounded-lg p-2 gap-2 shadow-lg"
				>
					<h1 className="col-span-6 text-center">Logga in</h1>
					<label className="text-grey-100 lg:col-span-2 justify-end">
						Användarnamn:
					</label>
					<input
						type="text"
						className="lg:col-span-4 rounded  py-1 px-2"
						onChange={changeHandler}
						name="username"
						required
					></input>

					<label className="lg:col-span-2">Lösenord:</label>
					<input
						type="password"
						className="lg:col-span-4 rounded py-1 px-2"
						name="password"
						onChange={changeHandler}
						required
					></input>
					<button
						type="submit"
						className="lg:col-start-2 lg:col-span-4 bg-yellow-100 rounded-lg py-1 bolder mt-5 mb-3 "
					>
						Logga in
					</button>
				</form>
			</div>
		);
	} else {
		return (
			<div className="min-h-80vh content-center flex">
				<button
					className="border text-3xl p-2 m-auto border-red-500 rounded"
					onClick={() => logOut()}
				>
					Logga ut
				</button>
			</div>
		);
	}
}
