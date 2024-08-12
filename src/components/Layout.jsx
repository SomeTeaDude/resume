import { useEffect } from "react";
import { setTheme } from "../utils/colorTheme";
import Sidebar from "./sidebar/Sidebar";
import FiexedButtons from "./FiexedButtons";

const Layout = ({ children }) => {
	useEffect(() => {
		setTheme();
	}, []);

	return (
		<div className="flex justify-center items-center py-4 w-full h-screen min-h-screen bg-main transition-all duration-1000">
			<div className="container relative h-full w-full shadow-4xl">
				<Sidebar />
				<div className="pe-72 h-full overflow-auto smooth-scroll">
					<div className="px-8 w-full h-full">{children}</div>
				</div>
			</div>
			<FiexedButtons />
		</div>
	);
};

export default Layout;
