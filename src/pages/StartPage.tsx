import { Post } from "./../models";
import { PostCard, GalleryCard } from "../components";
import { usePost, useSettings } from "./../context/";
import { Link } from "react-router-dom";

export default function StartPage() {
	const posts = usePost();
	const settings = useSettings();
	const token = settings?.token;
	let post: Post | undefined;
	if (posts) post = posts[0];

	return (
		<>
			<div className="grid grid-cols-3 lg:grid-cols-12 gap-8 min-h-80vh">
				<div className="lg:col-span-9 col-span-3">
					{post ? <PostCard post={post} /> : ""}
				</div>
				<div className="col-span-3 shadow-lg">
					{" "}
					{/* <GalleryCard />{" "} */}
				</div>
			</div>
		</>
	);
}
