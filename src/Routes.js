import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./pages/Main";
import Services from "./pages/services";
import Connect from "./pages/connect"
import Work from "./pages/work"


import Header from "./components/Header";
import Footer from "./components/Footer";

function AppRoutes() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/main" element={<Main />} />
				<Route path="/whatwedo" element={<Services />} />
				<Route path="/connect" element={<Connect />} />
				<Route path="/work" element={<Work />} />

			</Routes>

			<Footer />
		</div>
	);
}

export default AppRoutes;
