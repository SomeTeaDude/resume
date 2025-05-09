import { LuMoon, LuSun } from "react-icons/lu";
import { changeThemeColor, makeDark, makeLight } from "../../utils/colorTheme";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { colors } from "../../utils/colors";

const ManageTheme = () => {
  const showNavbar = useSelector((state) => state.navbar.showNavbar);

  return (
    <div className="ps-6 py-4">
      <div className="flex justify-between items-center transition-all duration-750">
        <div className="flex justify-start items-center gap-2">
          {colors.map(({ name, mngThmClass }, i) => (
            <button
              key={i}
              onClick={() => changeThemeColor(name)}
              className={`relative p-2 ${mngThmClass} rounded-full`}
            >
              <FaCheck className="w-2 h-2 dark:text-white text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 love:opacity-100" />
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center w-24">
          <button
            onClick={makeDark}
            className="block dark:hidden py-[6px] text-xl text-secondary hover:text-slate-800 dark:hover:text-slate-300 transition-all duration-200"
          >
            <LuSun />
          </button>
          <button
            onClick={makeLight}
            className="hidden dark:block py-[6px] text-xl text-secondary hover:text-slate-800 dark:hover:text-slate-300 transition-all duration-200"
          >
            <LuMoon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageTheme;
