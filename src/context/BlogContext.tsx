import { useContext, useState, createContext } from "react";
import { Post } from "../models/";
import config from "../config.json";

const PostsContext = createContext<Array<Post> | null>(null);
const PostsUpdateContext = createContext<Function>(Function);
const API_URL = `${config.API_URL}post/all`;
export function usePost() {
	return useContext(PostsContext);
}

export function usePostUpdate() {
	return useContext(PostsUpdateContext);
}

export function PostProvider({ children }: any) {
	const [posts, setPosts] = useState([]);

	function getPosts() {
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	return (
		<PostsContext.Provider value={posts}>
			<PostsUpdateContext.Provider value={getPosts}>
				{children}
			</PostsUpdateContext.Provider>
		</PostsContext.Provider>
	);
}
