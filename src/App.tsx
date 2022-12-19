import React from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import { Loader } from "./containers";
import { LoaderPage } from "./recoil/Atoms";
import MyRoutes from "./routes/MyRoutes";


function App() {
	const loaded = useRecoilValue(LoaderPage);
	
	return <>{loaded ? <Loader /> : <MyRoutes />}</>;
}

export default App;
