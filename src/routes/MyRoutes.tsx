import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Footer, Navbar } from "../components";
import { Landing, About, Skills, Projects, } from "../containers";
import ProjectDetails from "../containers/projects/ProjectDetails";

const MyRoutes = () => {
	const Mylocation = useLocation();
	return (
		<>
			<Navbar />
			<AnimatePresence mode="wait" initial={false}>
				<Routes location={Mylocation} key={Mylocation.pathname}>
					<Route path="/" element={<Landing />} />
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/:ID" element={<ProjectDetails />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</>
	);
};

export default MyRoutes;
