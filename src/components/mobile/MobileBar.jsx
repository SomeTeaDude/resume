import MobileNavbarToggler from "./MobileNavbarToggler";
import MobileSidebarToggler from "./MobileSidebarToggler";

const MobileBar = () => {
  return (
    <div>
      <MobileNavbarToggler />
      <div className="flex justify-between items-center fixed top-0 start-0 translate-y-0 lg:-translate-y-full w-full h-16 bg-main-3 shadow-xl transition-all duration-750 z-30"></div>
      <MobileSidebarToggler />
    </div>
  );
};

export default MobileBar;
