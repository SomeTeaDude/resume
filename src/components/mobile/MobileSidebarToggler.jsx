import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice";

const MobileSidebarToggler = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);
  const showNavbar = useSelector((state) => state.navbar.showNavbar);

  const toggleTheSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={`flex lg:hidden justify-center items-center absolute top-8 -translate-y-1/2 -translate-x-1/2 ${
        !showSidebar || showNavbar
          ? "end-12 rotate-0"
          : "end-12 sm:end-60 rotate-90"
      } transition-all duration-750 z-50`}
    >
      <button
        onClick={toggleTheSidebar}
        className={`text-xl ${
          showNavbar ? "opacity-0 invisible" : "opacity-100 visible"
        } transition-all duration-300`}
      >
        <PiDotsThreeOutlineVerticalFill
          className={`stroke-[15px] ${
            showSidebar
              ? "stroke-transparent fill-secondary"
              : "stroke-secondary fill-transparent"
          } transition-all duration-750`}
        />
      </button>
    </div>
  );
};

export default MobileSidebarToggler;
