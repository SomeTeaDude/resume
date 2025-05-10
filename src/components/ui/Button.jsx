const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-slate-800 text-lg bg-primary hover:bg-transparent dark:hover:drop-shadow-glow hover:text-primary border border-primary rounded-sm px-8 py-2 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
