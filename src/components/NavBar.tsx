import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface NavItem {
	url: string;
	name: string;
}

const navItems: NavItem[] = [
	{ url: "/", name: "Startsida" },
	{ url: "/gallery", name: "Galleri" },
	{ url: "/", name: "Hundar" },
	{ url: "#", name: "Kontakt" },
];

export default function NavBar() {
	let lastScrollPosition = 0;

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			let navbar = document.getElementById("navBar");
			if (window.pageYOffset > lastScrollPosition) {
				navbar?.classList.add("opacity-0");
				setTimeout(() => {
					navbar?.classList.add("hidden");
				}, 200);
			} else {
				navbar?.classList.remove("hidden");
				navbar?.classList.remove("opacity-0");
			}
			lastScrollPosition = window.pageYOffset;
		});
	}, []);

	return (
		<nav
			id="navBar"
			className="fixed top-0 flex w-full linear  m-0 justify-end duration-200 drop-shadow-lg z-10 border-b-2 border-black"
		>
			<ul className="flex mx-10 lg:w-1/2 w-full justify-around">
				{navItems.map((item) => (
					<NavButton item={item} key={item.name} />
				))}
			</ul>
		</nav>
	);
}

function NavButton(props: { item: NavItem }) {
	return (
		<li className="lg:text-3xl text-xl my-2 font-serif duration-200 text-white text-shadow ">
			<Link to={props.item.url}>{`${props.item.name}`}</Link>
		</li>
	);
}
