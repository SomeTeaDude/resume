import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
	return (
		<div className="absolute end-0 top-0 bg-white dark:bg-slate-800 h-full w-72 shadow-2xl dark:shadow-gray-900">
			<Profile />
			<SidebarFooter />
		</div>
	);
};

export default Sidebar;
