import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../features/navbar/navbarSlice";

const MobileNavbarToggler = () => {
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);
  const showNavbar = useSelector((state) => state.navbar.showNavbar);
  const dispatch = useDispatch();

  const toggleTheNavbar = () => {
    dispatch(toggleNavbar());
  };

  return (
    <button
      onClick={toggleTheNavbar}
      className={`block lg:hidden absolute start-12 top-8 -translate-y-1/2 -translate-x-1/2 text-xl ${
        showNavbar || showSidebar
          ? "opacity-0 invisible"
          : "opacity-100 visible"
      } transition-all duration-300 z-40`}
    >
      <div
        className={`relative flex flex-col justify-center items-center w-4 h-4 ${
          showNavbar ? "gap-0" : "gap-1"
        } transition-all duration-750`}
      >
        <span
          className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[3px] bg-secondary ${
            showNavbar ? "top-1/2 rotate-[50deg]" : "top-[2px] rotate-0"
          } transition-all duration-750`}
        ></span>
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[3px] bg-secondary ${
            showNavbar ? "opacity-0" : "opacity-100"
          } transition-all duration-750`}
        ></span>
        <span
          className={`absolute left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-[3px] bg-secondary ${
            showNavbar ? "bottom-1/2 -rotate-[50deg]" : "bottom-[2px] rotate-0"
          } transition-all duration-750`}
        ></span>
      </div>
    </button>
  );
};

export default MobileNavbarToggler;
