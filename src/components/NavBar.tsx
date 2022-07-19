import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDropDown, useDog } from "../context";

interface ISubMenu {
	name: string;
	url: string;
}

interface NavItem {
	url: string;
	name: string;
	subMenu: boolean | undefined;
}

const navItems: NavItem[] = [
	{ url: "/", name: "Startsida", subMenu: undefined },
	{ url: "/gallery", name: "Galleri", subMenu: undefined },
	{
		url: "/",
		name: "Hundar",
		subMenu: true,
	},
	{ url: "/blog/list", name: "Blogg", subMenu: undefined },
];

const navButtonStyle =
	"lg:text-3xl text-xl my-2 font-serif duration-200 text-white text-shadow select-none";

export default function NavBar() {
	const dropDown = useDropDown();
	const closeDropDown: any = dropDown?.closeDropDown;
	let lastScrollPosition = 0;
	// useEffect(() => {
	// 	window.addEventListener("scroll", (e) => {
	// 		let navbar = document.getElementById("navBar");
	// 		if (window.pageYOffset > lastScrollPosition) {
	// 			navbar?.classList.add("opacity-0");
	// 			setTimeout(() => {
	// 				navbar?.classList.add("hidden");
	// 			}, 200);
	// 		} else {
	// 			navbar?.classList.remove("hidden");
	// 			navbar?.classList.remove("opacity-0");
	// 		}
	// 		lastScrollPosition = window.pageYOffset;
	// 	});
	// }, []);

	return (
		<nav
			id="navBar"
			className="absolute top-0 flex w-full linear  m-0 justify-end duration-200 drop-shadow-lg z-10 border-b-2 border-black"
			onClick={closeDropDown}
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
	const item = props.item;

	if (item.subMenu != undefined) return <DropDownMenu item={item} />;
	return (
		<li className={navButtonStyle}>
			<NavLink to={props.item.url}>{`${props.item.name}`}</NavLink>
		</li>
	);
}

function DropDownMenu(props: { item: NavItem }) {
	const item = props.item;
	const dropDown = useDropDown();
	const dogs = useDog();
	const showDropDown = dropDown?.showDropDown;
	const toggleDropDown: any = dropDown?.toggleDropDown;
	const closeDropDown: any = dropDown?.closeDropDown;

	return (
		<>
			<div
				className={`${navButtonStyle} cursor-pointer`}
				onClick={toggleDropDown}
			>
				{item.name}
			</div>
			<div
				className={`${
					showDropDown ? "" : "hidden"
				} absolute lg:top-14 bg-green-400 px-2 text-white translate-x-1/2 w-[150px] top-12 font-semibold rounded`}
			>
				{dogs?.map((sub, index) => {
					return (
						<NavLink
							to={`/dog/${sub.name}`}
							className="m-2 block"
							onClick={closeDropDown}
							key={index}
						>
							{sub.name}
						</NavLink>
					);
				})}
			</div>
		</>
	);
}
