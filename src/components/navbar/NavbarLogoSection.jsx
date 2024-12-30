import { useSelector } from "react-redux";
import Logo from "../ui/Logo";

const NavbarLogoSection = () => {
  const showNavbar = useSelector((state) => state.navbar.showNavbar);

  return (
    <div
      className={`flex justify-center items-center mt-6 ${
        showNavbar ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-750`}
    >
      <Logo />
    </div>
  );
};

export default NavbarLogoSection;
