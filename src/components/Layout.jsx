import { useState, useEffect } from "react";
import { setTheme } from "../utils/colorTheme";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../features/navbar/navbarSlice";
import Footer from "./ui/Footer";
import MobileBar from "./mobile/MobileBar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const showNavbar = useSelector((state) => state.navbar.showNavbar);

  const [timedShowNavbar, setTimedShowNavbar] = useState(false);

  useEffect(() => {
    setTheme();

    let timeout;

    if (showNavbar) {
      setTimedShowNavbar(showNavbar);
    } else {
      timeout = setTimeout(() => {
        setTimedShowNavbar(showNavbar);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showNavbar]);

  const toggleTheNavbar = () => {
    dispatch(toggleNavbar());
  };

  return (
    <div className="flex justify-center items-center py-0 xl:py-4 w-full h-auto xl:h-screen min-h-0 xl:min-h-screen bg-main transition-all duration-750">
      <div className="contain-layout xl:container relative h-auto lg:h-full w-full shadow-4xl bg-main-3 overflow-hidden transition-all duration-750">
        <Sidebar />
        <MobileBar />
        <div
          onClick={toggleTheNavbar}
          className={`fixed top-0 right-0 w-full h-full bg-black/40 ${
            timedShowNavbar ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-all duration-750 z-20`}
        ></div>
        <div
          id="scroll-container"
          className={`relative me-0 lg:me-72 ms-0 lg:ms-24 h-screen xl:h-full outline-none overflow-y-auto overflow-x-hidden no-scrollbar smooth-scroll ${
            timedShowNavbar ? "-translate-x-28" : "translate-x-0"
          } transition-all ease-in-out duration-750`}
        >
          <div className="w-full h-full mt-16 lg:mt-0">
            {children}
            <Footer />
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
