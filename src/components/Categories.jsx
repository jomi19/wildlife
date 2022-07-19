import React from "react";
import { useImage } from "./../context";
export default function Categories() {
	const images = useImage();
	return <div>{images.length}</div>;
}
