import AsideMenu from "@/layouts/AsideMenu";
import NavBar from "./NavBar";

function MainLayout() {
	return (
		<div className="antialiased bg-gray-50 dark:bg-gray-900">
			<NavBar />
			<AsideMenu />

			<main className="p-4 md:ml-64 h-auto pt-20">Main content here</main>
		</div>
	);
}

export default MainLayout;
