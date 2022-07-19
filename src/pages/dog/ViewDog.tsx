import { useEffect } from "react";
import { useDog } from "../../context";
import { useParams } from "react-router-dom";
import { RadarChart } from "../../components/";
import config from "../../config.json";
import DogContentBar from "../../components/dogcards/DogContentBar";
import { useSettings } from "../../context";
import { useNavigate } from "react-router-dom";

import { MdModeEditOutline } from "react-icons/md";
export default function ViewDog(props: any) {
	const params = useParams();
	const dogs = useDog();
	const siteSettings = useSettings();
	const token = siteSettings?.token || false;
	const navigate = useNavigate();
	const name = params.name;
	let dog = dogs?.find((dog) => dog.name === name);
	const imgUrl = config.API_URL;

	return (
		<>
			<h1>
				{dog?.name}
				{token ? (
					<MdModeEditOutline
						className="text-red-100"
						onClick={() => navigate(`/editdog/${name}`)}
					/>
				) : (
					""
				)}
			</h1>
			<div className="grid  lg:grid-cols-2 gap-4">
				<div className="">
					<img
						src={`${imgUrl}images/website/storm1.jpg`}
						alt="Hundnamn"
						className="rounded-full shadow-xl"
					/>
				</div>
				<div className="">
					{dog?.mh ? <RadarChart mh={dog?.mh} name={dog?.name} /> : ""}
				</div>

				{dog ? (
					<DogContentBar
						html={dog.sanitizedPrices}
						rawText={dog.prices}
						name={dog.name}
					/>
				) : (
					""
				)}

				{dog ? (
					<DogContentBar
						html={dog.sanitizedHd}
						rawText={dog.hd}
						name={dog.name}
					/>
				) : (
					""
				)}
			</div>
		</>
	);
}
