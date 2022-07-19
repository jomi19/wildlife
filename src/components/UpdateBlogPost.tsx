import { usePost } from "../context";
import { useParams } from "react-router-dom";
import type { Post } from "../models";

export default function UpdateBlogPost({ post, change, submit }: any) {
	let button = "Uppdatera";
	const inputClasses =
		"outline-1 outline outline-green-400 rounded py-1 px-2 col-span-1 focus:outline-2";
	if (!post) {
		button = "Nytt inlägg";
	}

	return (
		<form action="" className="flex flex-col gap-7   py-10" onSubmit={submit}>
			<label htmlFor="title" className="text-center">
				Titel:
			</label>
			<input
				type="text"
				name="title"
				required
				className={inputClasses}
				onChange={change}
				defaultValue={post?.title}
			/>
			<label htmlFor="markdown" className="text-center">
				Innehåll
			</label>
			<textarea
				className={inputClasses}
				rows={15}
				name="markdown"
				onChange={change}
				defaultValue={post?.markdown}
			></textarea>
			<button
				type="submit"
				className="font-semibold bg-green-300 text-white rounded-full py-2"
			>
				{button}
			</button>
		</form>
	);
}
