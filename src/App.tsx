import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import { Navbar } from "./components";
import { About, Footer, Landing, Projects, Skills } from "./containers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
