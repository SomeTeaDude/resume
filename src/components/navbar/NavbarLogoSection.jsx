import { useSelector } from "react-redux";
import LogoText from "../ui/LogoText";

const NavbarLogoSection = () => {
	const showNavbar = useSelector((state) => state.navbar.showNavbar);

	return (
		<div
			className={`flex justify-center items-center mt-6 ${
				showNavbar ? "opacity-100 visible" : "opacity-0 invisible"
			} transition-all duration-750`}
		>
			<LogoText />
		</div>
	);
};

export default NavbarLogoSection;
