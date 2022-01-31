import { useState } from "react";

export default function UpdateBlogPost({ post }: any) {
	let method = "PUT";
	let button = "Uptadera";

	if (!post) {
		method = "POST";
		button = "Nytt inlägg";
	}

	return (
		<form action="" method={method} className="grid gap-2 grid-cols-6">
			<label htmlFor="title" className="col-span-1 text-right">
				Titel:{" "}
			</label>
			<input
				type="text"
				name="text"
				required
				className="border border-blue-700 rounded py-1 px-1 col-span-5"
			/>
			<button
				type="submit"
				className="bg-transparent hover:bg-blue-700 font-semibold text-blue-700 hover:text-white rounded-full py-2 px-4 border border-blue-700 col-start-3 col-end-5"
			>
				{button}
			</button>
		</form>
	);
}
