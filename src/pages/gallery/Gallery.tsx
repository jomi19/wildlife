import { useEffect, useState } from "react";
import { useImage, useModal } from "../../context";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import config from "../../config.json";
const API_URL = config.API_URL;
export default function Gallery() {
	const images = useImage();
	const modal = useModal();
	const [currentImage, setCurrentImage] = useState<number>(0);

	function clickHandler(index: number) {
		setCurrentImage(index);
		modal?.toggleActive();
		modal?.setContent(index);
	}

	return (
		<>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 py-5">
				{images?.map((image, index) => {
					const imgUrl = `${API_URL}${image.path}`;
					return (
						<img
							src={imgUrl}
							alt={index.toString()}
							className="w-full aspect-square object-cover"
							onClick={() => clickHandler(index)}
							data-modal-toggle="defaultModal"
							key={index}
						/>
					);
				})}
			</div>
		</>
	);
}
