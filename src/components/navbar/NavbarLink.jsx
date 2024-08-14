import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../features/navbar/navbarSlice";
import { useEffect, useState } from "react";

const NavbarLink = ({ children, num }) => {
	const [timedShowNavbar, setTimedShowNavbar] = useState(false);

	const showNavbar = useSelector((state) => state.navbar.showNavbar);
	const dispatch = useDispatch();

	useEffect(() => {
		let timeout;

		if (showNavbar) {
			timeout = setTimeout(() => {
				setTimedShowNavbar(showNavbar)
			}, 100 * num)
		} else {
			timeout = setTimeout(() => {
				setTimedShowNavbar(showNavbar)
			}, 100 * num)
		}

		return () => {
			clearTimeout(timeout)
		}
	}, [showNavbar])

	const toggleTheNavbar = () => {
		dispatch(toggleNavbar());
	};

	return (
		<div className={`${timedShowNavbar ? 'translate-x-0' : 'translate-x-full'} transition-all duration-1000`}>
			<a
				href="#green-bg"
				onClick={toggleTheNavbar}
				className="block py-[6px] font-semibold text-secondary hover:text-slate-800 dark:hover:text-slate-300 transition-all duration-200"
			>
				{children}
			</a>
		</div>
	);
};

export default NavbarLink;
