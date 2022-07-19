import { useEffect } from "react";
import "./index.css";
import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import { ViewBlogPost, EditBlogPost, BlogList } from "./pages/blog/";
import { Gallery, ImageModal, UploadImage } from "./pages/gallery/";
import { Login } from "./pages/admin/";
import { usePostUpdate, useImageUpdate, useDogUpdate } from "./context/";
import Modal from "./pages/modals/Modal";
import { ViewDog, EditDog } from "./pages/dog";

function App() {
	const updatePosts = usePostUpdate();
	const updateImage = useImageUpdate();
	const updateDogs = useDogUpdate();

	useEffect(() => {
		updatePosts();
		updateImage();
		updateDogs();
	}, []);

	return (
		<>
			<Layout>
				<Routes>
					<Route path="/" element={<StartPage />} />
					<Route path="/view/:slug" element={<ViewBlogPost />} />
					<Route path="/edit/:slug" element={<EditBlogPost />} />
					<Route path="/newblogpost/" element={<EditBlogPost />} />
					<Route path="/newimage/" element={<UploadImage />} />
					<Route path="/login/" element={<Login />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/blog/list" element={<BlogList />} />
					<Route path="/dog/:name" element={<ViewDog />} />
					<Route path="/editdog/:name" element={<EditDog />} />
				</Routes>
			</Layout>
			<Modal />
			<ImageModal />
		</>
	);
}

export default App;
