import { useContext, useState, createContext } from "react";
import { Image } from "../models/";
import config from "../config.json";

const ImagesContext = createContext<Array<Image>>([]);
const ImagesUpdateContext = createContext<Function>(Function);
const API_URL = `${config.API_URL}image/all`;

export function useImage() {
	return useContext(ImagesContext);
}

export function useImageUpdate() {
	return useContext(ImagesUpdateContext);
}

export function ImageProvider({ children }: any) {
	const [images, setImages] = useState([]);

	function getImages() {
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				setImages(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	return (
		<ImagesContext.Provider value={images}>
			<ImagesUpdateContext.Provider value={getImages}>
				{children}
			</ImagesUpdateContext.Provider>
		</ImagesContext.Provider>
	);
}
