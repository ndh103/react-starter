import EventsHome from "@/assets/events/EventsHome";
import MainLayout from "@/layouts/MainLayout";
import AboutPage from "@/pages/about/AboutPage";
import ErrorPage from "@/pages/errors/ErrorPage";
import { createBrowserRouter, redirect } from "react-router-dom";

const mainRouter = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						loader: () => redirect("/events"),
					},
					{
						path: "/events",
						element: <EventsHome />,
					},
					{
						path: "/about",
						element: <AboutPage />,
					},
				],
			},
		],
	},
]);

export default mainRouter;
