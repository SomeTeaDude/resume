import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LanguageCircle = ({ title = "زبان", percentage = 0 }) => {
  const [mainPercentage, setMainPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setMainPercentage(percentage);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col justify-start items-center gap-1 [&_path]:!transition-all [&_path]:!duration-750 [&_text]:!transition-all [&_text]:!duration-750">
      <CircularProgressbar
        className="!transition-colors !duration-750"
        value={mainPercentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: "25px",

          pathTransitionDuration: 1,

          pathColor: `hsl(var(--twc-primary))`,
          textColor: "hsl(var(--twc-secondary))",
          trailColor: "hsl(var(--twc-main))",
        })}
      />
      <p className="text-sm text-secondary">{title}</p>
    </div>
  );
};

export default LanguageCircle;
