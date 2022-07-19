import { Header, Footer, NavBar, AdminBar } from "./";
import { useDropDown } from "../context";

export default function Layout({ children }) {
	const dropDown = useDropDown();
	const closeDropDown = dropDown?.closeDropDown;
	return (
		<>
			<NavBar />
			<div
				onClick={() => closeDropDown()}
				className="overflow-x-hidden overflow-y-auto h-screen perspective"
			>
				<Header />

				<div className="bg-white w-100 pt-4">
					<main className="container mx-auto px-10 bg-white min-h-80vh">
						<AdminBar />
						{children}
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
}
