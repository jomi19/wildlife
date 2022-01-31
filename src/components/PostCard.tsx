import React from "react";
import type { Post } from "../models";
import { Link, useLocation } from "react-router-dom";
import parse from "html-react-parser";

export default function PostCard({ post }: Post) {
	const id = post.id;
	return (
		<div className="w-full  py-2 my-2">
			<div className="text-2xl italic w-full flex border-b">
				<span className="flex justify-start w-2/3">{post.title}</span>
				<span className="text-base text-gray-400 flex  float-right w-1/3 justify-end pr-10">
					{new Date(post.created).toLocaleDateString()}
				</span>
			</div>
			<div>
				{parse(post.sanitizedHtml)}
				<Link to={`/view/${post.slug}`}>
					<span className="text-green-700 cursor-pointer"> Läs mer...</span>
				</Link>
			</div>
		</div>
	);
}
