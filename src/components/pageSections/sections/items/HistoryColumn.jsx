const HistoryColumn = ({ children }) => {
  return (
    <div className="flex flex-col gap-6 relative before:absolute before:top-2 before:start-0 before:translate-x-1/2 before:w-[6px] before:h-full before:bg-bar before:transition-all before:duration-750">
      {children}
    </div>
  );
};

export default HistoryColumn;
