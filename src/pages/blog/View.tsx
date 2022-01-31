import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Post } from "../../models";
import utils from "../../services/utils";
import parse from "html-react-parser";

export default function ViewBlogPost() {
	let params = useParams();
	const slug = params.slug;
	const [post, setPost] = useState<Post>();
	useEffect(() => {
		fetch(`http://localhost:5000/post?slug=${slug}`)
			.then((response) => response.json())
			.then((data) => {
				setPost(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	console.log(post);
	if (post) {
		return (
			<article className="min-h-80vh">
				<h1 className="text-center font-bold">
					{utils.capitalizeFirstLetter(post.title)}
				</h1>
				<div className="text-2xl">{parse(post.sanitizedHtml)}</div>
			</article>
		);
	}

	return <div className="min-h-80vh">Kan inte hitta inlägget</div>;
}
