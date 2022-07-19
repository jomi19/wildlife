import { useImage } from "../context/";
import config from "../config.json";
const API_URL = config.API_URL;

function random(max: number) {
	return Math.floor(Math.random() * max);
}

export default function GalleryCard() {
	const images = useImage();
	const image = images[random(images?.length)];
	if (image) {
		const imageUrl = `${API_URL}${image?.path}`;
		const description = image.description;

		return (
			<div className="h-1/2">
				<img
					src={imageUrl}
					alt={description}
					className="rounded shadow-lg max-w-[90%] m-auto max-h-[90%]"
				/>
				<span>hej</span>
			</div>
		);
	}
	return <></>;
}
