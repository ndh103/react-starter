import OverviewMenuIcon from "@/assets/icons/overview-menu.svg?react";
import DocMenuIcon from "@/assets/icons/doc-menu.svg?react";
import { Link } from "react-router-dom";

function AsideMenu() {
	return (
		<aside
			className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
			aria-label="Sidenav"
			id="drawer-navigation"
		>
			<div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
				<ul className="space-y-2">
					<li>
						<Link
							to={"events"}
							className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
						>
							<OverviewMenuIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
							<span className="ml-3">Events</span>
						</Link>
					</li>
				</ul>

				<ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
					<li>
						<Link
							to={"about"}
							className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
						>
							<DocMenuIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
							<span className="ml-3">About</span>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default AsideMenu;
