import { Post } from "./../models";
import { PostCard, Instagram } from "../components";
import { useState, useEffect } from "react";

export default function StartPage() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/post/all")
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<div className="grid grid-cols-3 lg:grid-cols-12 gap-8 min-h-80vh">
				<div className="lg:col-span-9 col-span-3 ">
					{posts.map((post: Post, index: number) => (
						<PostCard post={post} key={index} />
					))}
				</div>
				<div className="col-span-3 shadow-lg">{/* <Instagram /> */}</div>
			</div>
		</>
	);
}
