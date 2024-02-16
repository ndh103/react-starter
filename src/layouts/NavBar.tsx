function NavBar() {
	return (
		<nav className="fixed left-0 right-0 top-0 z-50 text-white bg-lime-700 px-4 py-2.5 shadow-md">
			<div className="flex flex-wrap justify-between items-center">
				<div className="flex justify-start items-center">
					<span className="self-center text-2xl font-semibold whitespace-nowrap">
						Task Management
					</span>
				</div>
				<div className="flex items-center lg:order-2">User profile</div>
			</div>
		</nav>
	);
}

export default NavBar;
