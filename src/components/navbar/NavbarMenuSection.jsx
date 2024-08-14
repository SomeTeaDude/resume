import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import NavbarLink from "./NavbarLink";
import { FaHome } from "react-icons/fa";

const NavbarMenuSection = () => {
	const showNavbar = useSelector((state) => state.navbar.showNavbar);
	
	const [timedShowNavbar, setTimedShowNavbar] = useState(false);

	useEffect(() => {
		let timeout;

		if (showNavbar) {
			setTimedShowNavbar(showNavbar)
		} else {
			timeout = setTimeout(() => {
				setTimedShowNavbar(showNavbar)
			}, 500)
		}

		return () => {
			clearTimeout(timeout)
		}
	}, [showNavbar])

	const links = ["خانه", "نمونه کار ها", "تاریخچه", "وبلاگ ها", "تماس"];

	return (
		<div className="flex flex-col justify-start items-end">
			<div
				className={`w-full px-6 pb-4 pt-12 border-b border-secondary/30  ${
					timedShowNavbar ? "opacity-100" : "opacity-0"
				} transition-all duration-500`}
			>
				{links.map((link, index) => (
					<NavbarLink key={index} num={index}>
						{link}
					</NavbarLink>
				))}
			</div>
		</div>
	);
};

export default NavbarMenuSection;
