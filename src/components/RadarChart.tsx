import { Imh } from "../models/";
import Chart from "chart.js/auto";
import { useEffect } from "react";

export default function RadarChart(props: any) {
	const canvas = document.createElement("canvas") as HTMLCanvasElement;
	const ctx = canvas.getContext("2d");

	const mh: Imh = props.mh;
	const { curiosity, aggression, social, hunting, playfulness } = mh || 0;

	const backgroundColor = "rgba(186, 194, 4, 0.4)"; //Background color in the center of radar
	const borderColor = "#7F9307"; // Border color for radar
	const pointBackgroundColor = "#7F9307"; // Dot color

	let myChart: any;
	let dogData = [playfulness, aggression, social, hunting, curiosity];

	const options = {
		scales: {
			r: {
				suggestedMin: 0,
				suggestedMax: 5,
				ticks: {
					stepSize: 1,
					color: "#2D520C",
				},
				pointLabels: {
					font: {
						size: 16,
						weight: "bold",
						color: "#2D520C",
					},
					color: "#2D520C",
				},
			},
		},
		plugins: {
			legend: {
				display: false,
				font: {
					size: 20,
				},
			},
		},
		elements: {
			line: {
				borderWidth: 2,
			},
		},
	};
	const data = {
		labels: [
			"Lekfullhet",
			"Aggressivitet",
			"Socialitet",
			"Jaktintresse",
			"Nyfikenhet",
		],
		datasets: [
			{
				data: dogData,
				backgroundColor,
				borderColor,
				pointBackgroundColor,
			},
		],
	};

	if (ctx !== null) {
		myChart = new Chart(ctx, {
			type: "radar",
			data: data,
			options: options,
		});
	}

	useEffect(() => {
		const hej = document.getElementById("mhChart");

		if (!hej) return;
		hej.innerHTML = "";
		hej?.appendChild(canvas);
	});
	return <div id="mhChart" />;
}
