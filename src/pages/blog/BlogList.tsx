import React from "react";
import { usePost } from "../../context";
import { PostCard } from "../../components";

export default function BlogList() {
	const posts = usePost();

	console.log(posts);
	return (
		<div>
			{posts?.map((post, index) => {
				return <PostCard post={post} key={index} />;
			})}
		</div>
	);
}
