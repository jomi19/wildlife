import { useContext, useState, createContext } from "react";
import { IDog } from "../models/";
import config from "../config.json";

const DogsContext = createContext<Array<IDog> | null>(null);
const DogsUpdateContext = createContext<Function>(Function);
const API_URL = `${config.API_URL}dog/all`;

export function useDog() {
	return useContext(DogsContext);
}

export function useDogUpdate() {
	return useContext(DogsUpdateContext);
}

export function DogProvider({ children }: any) {
	const [dogs, setDogs] = useState([]);

	function getDogs() {
		fetch(`${API_URL}`)
			.then((response) => response.json())
			.then((data) => {
				setDogs(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	return (
		<DogsContext.Provider value={dogs}>
			<DogsUpdateContext.Provider value={getDogs}>
				{children}
			</DogsUpdateContext.Provider>
		</DogsContext.Provider>
	);
}
