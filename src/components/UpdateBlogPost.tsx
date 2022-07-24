import { TextInput, TextAreaInput, SubmitButton } from "./inputs";

export default function UpdateBlogPost({ post, change, submit }: any) {
	let button = "Uppdatera";
	const inputClasses =
		"outline-1 outline outline-green-200 rounded py-1 px-2 col-span-1 focus:outline-4";
	if (!post) {
		button = "Nytt inlägg";
	}

	return (
		<form action="" className="flex flex-col gap-7   py-10" onSubmit={submit}>
			<TextInput
				name="title"
				required
				changeHandler={change}
				label="Titel"
				value={post?.title}
			/>
			<label htmlFor="markdown" className="text-center">
				Innehåll
			</label>
			<TextAreaInput
				value={post?.markdown}
				changeHandler={change}
				name="markdown"
				rows={15}
				label="Innehåll"
			/>
			<SubmitButton name={button} />
		</form>
	);
}
