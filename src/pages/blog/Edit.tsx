import { useState } from "react";
import { UpdateBlogPost } from "../../components";
import { usePost, useSettings, usePostUpdate } from "../../context";
import { useParams, useNavigate } from "react-router-dom";
import { Post } from "../../models";
import config from "../../config.json";

export default function EditBlogPost() {
	const params = useParams();
	const slug = params.slug;
	const posts = usePost();
	const updatePosts = usePostUpdate();
	const [form, setForm] = useState<any>({});
	const apiUrl = `${config.API_URL}post`;
	const webSettings = useSettings();
	const token = webSettings?.token || "";
	const navigate = useNavigate();

	let post;

	if (slug && Array.isArray(posts) && post === undefined) {
		post = posts.find((p) => p.slug === slug);
		if (post && form.title === undefined) {
			setForm(post);
		}
	}

	function changeHandler(
		e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;

		setForm({ ...form, [name]: value });
	}

	async function submitHandler(e: React.SyntheticEvent) {
		e.preventDefault();
		const method = slug ? "PUT" : "POST";
		const body = JSON.stringify(form);

		fetch(apiUrl, {
			method: method,
			headers: {
				"Content-Type": "application/json",
				"x-access-token": token,
			},
			body: body,
		})
			.then((respons) => respons.json())
			.then((data) => {
				if (!data.err) {
					updatePosts();
					navigate("/");
				}
			})
			.catch((err) => {
				console.log("err");
			});
		console.log(method);
	}

	return (
		<div>
			<UpdateBlogPost
				change={changeHandler}
				submit={submitHandler}
				post={post}
			/>
		</div>
	);
}
