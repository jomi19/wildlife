import React from "react";
import { useModal, useImage } from "../../context";

export default function Modal() {
	const modal = useModal();

	if (!modal?.secondModal) return <></>;
	return (
		<div>
			{" "}
			<div
				className="fixed w-screen h-screen bg-black opacity-80 z-40 top-0 left-0"
				onClick={() => modal?.toggleSecond()}
			></div>
			<div className="bg-white opacity-100 fixed top-1/2 left-1/2 z-50 -translate-y-1/2 -translate-x-1/2">
				{modal?.secondContent}
			</div>
		</div>
	);
}
