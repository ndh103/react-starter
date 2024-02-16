// import OverviewMenuIcon from "@/assets/icons/overview-menu.svg?react";
// import DocMenuIcon from "@/assets/icons/doc-menu.svg?react";
import { Link, NavLink } from "react-router-dom";
import { BookOpenText, ClipboardList } from "lucide-react";
import clsx from "clsx";

function AsideMenu() {
	const iconClasses = "w-5 h-5 transition duration-75";

	const menuItems = [
		{
			to: "tasks",
			text: "Tasks",
			iconElement: <ClipboardList className={iconClasses} />,
		},
		{
			to: "about",
			text: "About",
			iconElement: <BookOpenText className={iconClasses} />,
		},
	];

	return (
		<aside
			className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r  pt-14 transition-transform md:translate-x-0"
			aria-label="Sidenav"
			id="drawer-navigation"
		>
			<div className="overflow-y-auto py-5 px-3 h-full bg-stone-100">
				<ul className="space-y-2">
					{menuItems.map((item) => {
						return (
							<li>
								<NavLink
									to={item.to}
									className={({ isActive, isPending }) =>
										clsx([
											"flex items-center p-2 text-base font-medium rounded-lg group",
											isActive && "bg-primary text-white",
											isPending && "pending",
											!isActive &&
												!isPending &&
												"hover:bg-stone-200 hover:text-primary",
										])
									}
								>
									{item.iconElement}
									<span className="ml-3">{item.text}</span>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</aside>
	);
}

export default AsideMenu;
