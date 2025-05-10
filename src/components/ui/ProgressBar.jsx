const ProgressBar = ({ percentage = 0 }) => {
  return (
    <div className="relative w-full h-1 bg-main transition-all duration-750">
      <div
        className="absolute top-0 start-0 h-full bg-primary dark:shadow-glow rounded-ee-md rounded-se-md transition-all duration-1000"
        style={{ width: percentage + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
