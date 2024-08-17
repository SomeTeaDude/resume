const SectionTitle = ({ children }) => {
  return (
    <div className="my-8">
      <h1 className="text-slate-800 dark:text-slate-200 text-lg font-semibold transition-all duration-750">
        {children}
      </h1>
    </div>
  );
};

export default SectionTitle;
