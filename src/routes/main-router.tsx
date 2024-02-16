import TasksHome from "@/pages/tasks/TasksHome";
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
						loader: () => redirect("/tasks"),
					},
					{
						path: "/tasks",
						element: <TasksHome />,
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
