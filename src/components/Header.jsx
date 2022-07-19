import React from "react";
import NavBar from "./NavBar";
import hund2 from "./../img/hund2.jpg";

export default function Headler() {
	return (
		<header className="relative flex justify-center items-center h-2/3 md:h-full preserve z  border-b-2 border-black">
			<img
				src={hund2}
				className="absolute h-[110%] w-[110%] object-cover top-0 z away"
			/>
			<span className="mt-20 lg:text-7xl text-5xl text-shadow semi-away text-white">
				- Wildlife Aussie -
			</span>
		</header>
	);
}
