import { Link } from "react-router-dom";
import { useSettings, useLogOut } from "../context";

export default function AdminBar() {
	const settings = useSettings();
	const online = settings?.token;
	const logOut = useLogOut();

	if (online) {
		const buttonStyling =
			"bg-green-200 rounded py-1 px-3 justify-end active:bg-green-100 active:shadow-none shadow-md text-white text-shadow mx-4";
		return (
			<div className="flex justify-end py-2">
				<Link to="/newblogpost/" className={buttonStyling}>
					Nytt inlägg
				</Link>
				<Link to="/newimage/" className={buttonStyling}>
					Ny bild
				</Link>
				<Link to="/dog/edit/new" className={buttonStyling}>
					Ny hund
				</Link>
				<div className={buttonStyling} onClick={() => logOut()}>
					Logga ut
				</div>
			</div>
		);
	}
	return <></>;
}
