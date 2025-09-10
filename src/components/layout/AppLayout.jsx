// external inputs
import { Outlet } from "react-router";

// internal inputs
import { Header } from "../UI/Header";
import { Footer } from "../UI/Footer";

export const AppLayOut = () => {
	return (
		<>
			<Header/>
			<div className="marginTop30">
			<Outlet />
			</div>
            <Footer/>
		</>
	);
};
