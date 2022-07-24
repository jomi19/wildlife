import { useState } from "react";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import { useSettings, useImageUpdate } from "./../../context";
import Resizer from "react-image-file-resizer";

const resizeFile = (file: any) =>
	new Promise((resolve) => {
		let type = "jpeg";
		if (file.type === "image/png") type = "png";
		Resizer.imageFileResizer(
			file,
			1000,
			1000,
			type,
			100,
			0,
			(uri) => {
				resolve(uri);
			},
			"blob"
		);
	});

export default function UploadImage() {
	const [image, setImage] = useState<any>();
	const apiUrl = `${config.API_URL}image`;
	const webSettings = useSettings();
	const token = webSettings?.token || "";
	const tags: any = {};
	const updateImages = useImageUpdate();

	const navigate = useNavigate();
	let description: string = "";
	const inputClasses =
		"outline-1 outline outline-green-400 rounded py-1 px-2 col-span-1 focus:outline-2";

	async function imageChange(e: any) {
		try {
			const file = e.target.files[0];
			const image = await resizeFile(file);
			setImage(image);
			console.log(image);
		} catch (err) {
			console.log(err);
		}
	}

	function descriptionHandler(e: any) {
		description = e.target.value;
		console.log(description);
	}

	function submitHandler(e: any) {
		e.preventDefault();
		const formData = new FormData();

		if (image === undefined) return;
		formData.append("image", image);

		formData.append("description", description);
		for (const tag in tags) {
			formData.append("tags[]", tag);
		}

		fetch(apiUrl, {
			method: "POST",
			headers: {
				"x-access-token": token,
			},
			body: formData,
		})
			.then((data) => {
				console.log("test");

				updateImages();
				navigate("/gallery");
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function TagSelector({ name }: any) {
		const lowerName = name.toLowerCase();
		function tagChangeHandler(e: any) {
			const name: string = e.target.name || "";

			if (e.target.checked) {
				tags[name] = true;
			} else {
				delete tags[name];
			}
		}
		return (
			<>
				<input
					type="checkbox"
					name={name}
					id={lowerName}
					onChange={tagChangeHandler}
				/>
				<label htmlFor={lowerName} className="pr-10 pl-1">
					{name}
				</label>
			</>
		);
	}

	return (
		<form
			action=""
			className="flex flex-col gap-7   py-10"
			onSubmit={submitHandler}
		>
			<label htmlFor="image" className="text-center">
				Välj bild
			</label>
			{image ? <img src={URL.createObjectURL(image)}></img> : ""}

			<input
				type="file"
				accept="image/*"
				name="image"
				required
				onChange={imageChange}
			></input>
			<label className="text-center">Bild taggar</label>
			<div className="content-center my-0 mx-auto">
				<TagSelector name="Aiko" />
				<TagSelector name="Storm" />
			</div>

			<label className="text-center">Bild Beskrivning</label>
			<textarea
				className={inputClasses}
				rows={10}
				onChange={descriptionHandler}
			></textarea>
			<input type="submit" />
		</form>
	);
}
