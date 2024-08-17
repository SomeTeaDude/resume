import { useEffect, useState } from "react";
import ProgressBar from "../../../ui/ProgressBar";

const FrameworkProgressBar = ({ percentage = 0, title = "فریم ورک" }) => {
  const [mainPercentage, setMainPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setMainPercentage(percentage);
    }, [500]);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold tracking-wider">
          {title}
        </p>
        <p className="text-xs text-secondary font-light">{percentage}%</p>
      </div>
      <ProgressBar percentage={mainPercentage} />
    </div>
  );
};

export default FrameworkProgressBar;
