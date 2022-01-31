import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			<div className="overflow-x-hidden overflow-y-auto h-screen perspective">
				<Header />
				<div className="bg-white w-100 pt-4">
					<main className="container mx-auto px-10 bg-white">{children}</main>
				</div>
				<Footer />
			</div>
		</>
	);
}
