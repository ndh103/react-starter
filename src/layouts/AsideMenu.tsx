// import OverviewMenuIcon from "@/assets/icons/overview-menu.svg?react";
// import DocMenuIcon from "@/assets/icons/doc-menu.svg?react";
import { Link } from "react-router-dom";
import { BookOpenText, ClipboardList } from "lucide-react";

function AsideMenu() {
	return (
		<aside
			className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r  pt-14 transition-transform md:translate-x-0"
			aria-label="Sidenav"
			id="drawer-navigation"
		>
			<div className="overflow-y-auto py-5 px-3 h-full bg-stone-100">
				<ul className="space-y-2">
					<li>
						<Link
							to={"tasks"}
							className="flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-100 hover:text-gray-900 group"
						>
							<ClipboardList className="w-6 h-6 transition duration-75 group-hover:text-gray-900" />
							<span className="ml-3">Tasks</span>
						</Link>
					</li>
				</ul>

				<ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 ">
					<li>
						<Link
							to={"about"}
							className="flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-100 hover:text-gray-900 group"
						>
							<BookOpenText className="w-6 h-6 transition duration-75 group-hover:text-gray-900" />
							<span className="ml-3">About</span>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default AsideMenu;
