import { changeThemeColor, makeDark, makeLight } from "../utils/colorTheme";

const FiexedButtons = () => {
	return (
		<div>
			<button
				onClick={() => changeThemeColor("gold")}
				className="fixed bottom-4 right-4 bg-golden gold:bg-golden/50 p-4 rounded-full"
			></button>
			<button
				onClick={() => changeThemeColor("love")}
				className="fixed bottom-4 right-14 bg-lovely love:bg-lovely/50 p-4 rounded-full"
			></button>
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

export default FiexedButtons;
