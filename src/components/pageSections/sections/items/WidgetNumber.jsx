import { useEffect, useState } from "react";

const WidgetNumber = ({ children, num, withPlus = false }) => {
  const [countingNum, setCountingNum] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (countingNum !== num) {
        setCountingNum((num) => num + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [countingNum]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-start items-center gap-2 transition-all duration-750">
        <h3 className="dark:text-glow text-primary text-2xl transition-all duration-750">{`${
          withPlus ? "+ " : ""
        } ${countingNum}`}</h3>
        <p className="text-slate-800 dark:text-slate-200 font-semibold">
          {children}
        </p>
      </div>
    </div>
  );
};

export default WidgetNumber;
