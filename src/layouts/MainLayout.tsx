import AsideMenu from "@/layouts/AsideMenu";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
	return (
		<div className="antialiased bg-gray-50 dark:bg-gray-900">
			<NavBar />
			<AsideMenu />

			<main className="p-4 md:ml-64 h-auto pt-20">
				<Outlet />
			</main>
		</div>
	);
}

export default MainLayout;
