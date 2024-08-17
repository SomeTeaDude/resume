import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";
import SidebarContent from "./content/SidebarContent";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between absolute end-0 top-0 bg-main-3 h-full w-72 shadow-4xl transition-all duration-750 z-10">
      <Profile />
      <SidebarContent />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
