import { useSelector } from "react-redux";
import NavbarTogglerSection from "./NavbarTogglerSection";
import NavbarMenuSection from "./NavbarMenuSection";
import ManageTheme from "./ManageTheme";
import NavbarLogoSection from "./NavbarLogoSection";
import { useEffect, useState } from "react";

const Navbar = () => {
  const showNavbar = useSelector((state) => state.navbar.showNavbar);

  const [timedShowNavbar, setTimedShowNavbar] = useState(false);

  useEffect(() => {
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

  return (
    <div
      className={`transition-all ${
        timedShowNavbar ? "me-44" : "me-0"
      } duration-750`}
    >
      <div
        className={`flex flex-col justify-between absolute start-0 top-0 bg-main-3 dark:bg-main-1 h-screen lg:h-full w-full md:w-52 shadow-4xl ${
          timedShowNavbar
            ? "translate-x-0"
            : "translate-x-full lg:translate-x-28"
        } transition-all ease-in-out duration-750 z-50`}
      >
        <div>
          <NavbarTogglerSection />
          <NavbarMenuSection />
          <NavbarLogoSection />
        </div>
        <div>
          <ManageTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
