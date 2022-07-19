import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaKey } from "react-icons/fa";

export default function Footer() {
	const iconTextStyling = "text-xl font-semibold px-2";
	const iconStyling = "text-3xl";
	const instagramUrl = "https://www.instagram.com/wildlife_aussie/";
	const facebookUrl = "#";
	return (
		<footer className=" linear min-h-20vh text-white">
			<div className="container mx-auto grid grid-cols-3">
				<div className="content-center">
					<a href={facebookUrl} className="flex  py-2">
						<FaFacebook className={iconStyling} />
						<span className={iconTextStyling}>Facebook</span>
					</a>

					<a href={instagramUrl} className="flex  py-2">
						<FaInstagram className={iconStyling} />
						<span className={iconTextStyling}>Instagram</span>
					</a>
				</div>
				<div>Kontakt mail</div>

				<div>
					<Link to="/login" className="flex py-2">
						<FaKey />
						<span className="px-2">Logga in</span>
					</Link>
				</div>
			</div>
		</footer>
	);
}
