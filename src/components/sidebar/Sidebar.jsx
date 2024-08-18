import { useSelector } from "react-redux";
import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";
import SidebarContent from "./content/SidebarContent";

const Sidebar = () => {
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);
  const showNavbar = useSelector((state) => state.navbar.showNavbar);

  return (
    <div
      className={`flex flex-col justify-between absolute end-0 top-0 ${
        !showSidebar || showNavbar ? "-translate-x-full" : "translate-x-0"
      } lg:translate-x-0 bg-main-3 h-screen lg:h-full w-72 shadow-4xl transition-all duration-750 z-40`}
    >
      <Profile />
      <SidebarContent />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
