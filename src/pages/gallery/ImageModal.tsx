import { useModal, useImage } from "../../context";
import {
	MdArrowForwardIos,
	MdArrowBackIos,
	MdDeleteOutline,
	MdModeEdit,
} from "react-icons/md";
import { useSettings, useImageUpdate } from "../../context";
import config from "../../config.json";
const API_URL = `${config.API_URL}`;
export default function ImageModal() {
	//TODO: Fix so you dont need to fetch new after delete
	const modal = useModal();
	const images = useImage();
	const index = modal?.content || 0;
	const image = images[index];
	const imgUrl = `${API_URL}${image?.path}`;
	const settings = useSettings();
	const token = settings?.token || "";
	const imageUpdate = useImageUpdate();

	if (!modal?.active) return <></>;

	function scroll(test: number) {
		modal?.setContent(modal?.content + test);
	}
	function deleteImg() {
		console.log("hej");
		fetch(`${API_URL}image`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json", "x-access-token": token },
			body: JSON.stringify({ id: image._id }),
		})
			.then((respons) => respons.json)
			.then((data) => {
				imageUpdate();
			})
			.catch((error) => {
				console.log("error");
			});
		console.log(image?._id);
	}

	return (
		<>
			<div
				className="fixed w-screen h-screen bg-black opacity-80 z-40 top-0 left-0"
				onClick={() => modal.toggleActive()}
			></div>
			{index > 0 ? (
				<MdArrowBackIos
					className="fixed top-1/2 left-10 text-white text-4xl z-50"
					onClick={() => scroll(-1)}
				/>
			) : (
				<></>
			)}
			{token ? (
				<>
					<MdDeleteOutline
						className="absolute top-5 right-20 text-4xl text-red-500 z-50"
						onClick={deleteImg}
					/>
					<MdModeEdit className="absolute top-5 right-8 text-4xl text-red-500 z-50" />
				</>
			) : (
				"inteinloggad"
			)}

			<div className=" bg-white opacity-100 fixed top-1/2 left-1/2 z-50 -translate-y-1/2 -translate-x-1/2">
				<img src={imgUrl} className=""></img>
			</div>
			{index + 1 < images.length ? (
				<MdArrowForwardIos
					className="fixed top-1/2 right-10 text-white text-4xl z-50"
					onClick={() => scroll(1)}
				/>
			) : (
				<></>
			)}
		</>
	);
}
