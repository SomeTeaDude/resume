import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../features/navbar/navbarSlice";

const NavbarTogglerSection = () => {
  const showNavbar = useSelector((state) => state.navbar.showNavbar);
  const dispatch = useDispatch();

  const toggleTheNavbar = () => {
    dispatch(toggleNavbar());
  };

  return (
    <div className="flex justify-end items-center bg-main-1 dark:bg-main-2 h-20 shadow-3xl transition-all duration-750">
      <div className="flex justify-center items-center w-24 h-full">
        <button
          onClick={toggleTheNavbar}
          className={`flex justify-center items-center w-16 h-16`}
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
                showNavbar
                  ? "bottom-1/2 -rotate-[50deg]"
                  : "bottom-[2px] rotate-0"
              } transition-all duration-750`}
            ></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavbarTogglerSection;
