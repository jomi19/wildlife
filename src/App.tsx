import React from "react";
import logo from "./logo.svg";
import "./index.css";
import { Layout, NavBar } from "./components";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ViewBlogPost from "./pages/blog/View";
import EditBlogPost from "./pages/blog/Edit";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/view/:slug" element={<ViewBlogPost />} />
				<Route path="/edit/:slug" element={<EditBlogPost />} />
				<Route path="/newblogpost/" element={<EditBlogPost />} />
			</Routes>
		</Layout>
	);
}

export default App;
