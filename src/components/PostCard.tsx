import { useSettings } from "../context";
import parse from "html-react-parser";
import utils from "./../services/utils";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useModal, usePostUpdate } from "../context";
import config from "./../config.json";

export default function PostCard({ post }: any) {
	const { title, sanitizedHtml, slug, created } = post;

	return (
		<div className="w-full  py-2 my-2">
			<div className="text-2xl italic w-full flex border-b">
				<span className="flex justify-start w-2/3">
					{utils.capitalizeFirstLetter(title)}
				</span>
				<span className="text-base text-gray-400 flex  float-right w-1/3 justify-end pr-10">
					{new Date(created).toLocaleDateString()}
				</span>
				<AdminBlogCard slug={slug} title={title} />
			</div>
			<div>{parse(sanitizedHtml)}</div>
		</div>
	);
}

interface IAdminBlogCard {
	slug: string;
	title: string;
}

function AdminBlogCard({ slug, title }: IAdminBlogCard) {
	const siteSettings = useSettings();
	const token = siteSettings?.token;
	const svgStyling = "text-red-100";
	const link = `/edit/${slug}`;
	const modal = useModal();
	const apiUrl = `${config.API_URL}post`;
	const update = usePostUpdate();

	function deleteModalHandler() {
		modal?.setSecondContent(<DeleteModal />);
		modal?.toggleSecond();
	}

	function deleteHandler() {
		const data = { slug: slug };
		fetch(apiUrl, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": token || "",
			},
			body: JSON.stringify(data),
		})
			.then((data) => {
				modal?.toggleSecond();
				update();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	if (!token) return <></>;

	function DeleteModal() {
		return (
			<>
				<button
					className="bg-red-100 rounded w-full px-2 py-1 text-lg"
					onClick={deleteHandler}
				>
					Ta bort {title}
				</button>
			</>
		);
	}

	return (
		<>
			<Link to={link}>
				<MdModeEditOutline className={svgStyling} />
			</Link>
			<MdDeleteOutline className={svgStyling} onClick={deleteModalHandler} />
		</>
	);
}
