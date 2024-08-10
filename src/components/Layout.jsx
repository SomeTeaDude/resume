import { useEffect } from "react";
import { makeDark, makeLight, setTheme } from "../utils/colorTheme";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
	useEffect(() => {
		setTheme();
	}, []);

	return (
		<div className="flex justify-center items-center py-4 w-full h-screen min-h-screen bg-zinc-200 dark:bg-zinc-700">
			<div className="container relative h-full w-full">
				<Sidebar />
				<div className="pe-72 h-full">
					<div className="px-8 w-full h-full">
						<div className="bg-black w-full h-full"></div>
					</div>
				</div>
			</div>
			<button
				onClick={makeDark}
				className="block dark:hidden fixed bottom-4 left-4 bg-slate-800 text-slate-200 p-2 rounded-md"
			>
				تاریک
			</button>
			<button
				onClick={makeLight}
				className="hidden dark:block fixed bottom-4 left-4 bg-slate-200 text-slate-800 p-2 rounded-md"
			>
				روشن
			</button>
		</div>
	);
};

export default Layout;
