// external imports
import { createBrowserRouter, RouterProvider } from "react-router";

// internal imports
import "./app.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { AppLayOut } from "./Components/layOut/AppLayOut";
import { ErrorPage } from "./pages/Error";
import { CountryIndividualCard } from "./Components/layOut/CountryIndividualCard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayOut />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "country",
				element: <Country />,
			},
			{
				path: "country/:id",
				element: <CountryIndividualCard/>
			},
			{
				path: "contact",
				element: <Contact />,
			},
		],
	},
]);

const WorldExplore = () => {
	return <RouterProvider router={router}></RouterProvider>;
};

export default WorldExplore;
