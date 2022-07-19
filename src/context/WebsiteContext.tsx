import { useContext, useState, createContext } from "react";

interface Settings {
	token: string | null;
}

interface IDropDown {
	toggleDropDown: Function;
	showDropDown: Boolean;
	closeDropDown: Function;
}

const WebsiteContext = createContext<Settings | null>(null);
const LogInContext = createContext<Function>(Function);
const LogOutContext = createContext<Function>(Function);
const DropDownContext = createContext<IDropDown | null>(null);

export function useSettings() {
	return useContext(WebsiteContext);
}

export function useLogIn() {
	return useContext(LogInContext);
}

export function useLogOut() {
	return useContext(LogOutContext);
}

export function useDropDown() {
	return useContext(DropDownContext);
}

export function WebsiteProvider({ children }: any) {
	const [token, setToken] = useState(localStorage.getItem("login"));
	const [showDropDown, setShowDropDown] = useState(false);

	function logIn(token: string) {
		localStorage.setItem("login", token);
		setToken(token);
	}

	function logOut() {
		localStorage.removeItem("login");
		setToken(null);
	}

	function toggleDropDown() {
		setShowDropDown(!showDropDown);
		//if (showDropDown === "hidden") setShowDropDown("");
		// else setShowDropDown("hidden");
	}

	function closeDropDown() {
		if (showDropDown) setShowDropDown(false);
	}

	return (
		<WebsiteContext.Provider value={{ token }}>
			<LogInContext.Provider value={logIn}>
				<LogOutContext.Provider value={logOut}>
					<DropDownContext.Provider
						value={{ toggleDropDown, showDropDown, closeDropDown }}
					>
						{children}
					</DropDownContext.Provider>
				</LogOutContext.Provider>
			</LogInContext.Provider>
		</WebsiteContext.Provider>
	);
}
