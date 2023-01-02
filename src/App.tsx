import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import MyRoutes from "./routes/MyRoutes";

function App() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		navigate(location.pathname);
	}, []);

	return <MyRoutes />;
}

export default App;
