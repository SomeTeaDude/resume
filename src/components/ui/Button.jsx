const Button = ({ children, className }) => {
  return (
    <button
      type="button"
      className={`text-slate-800 text-lg bg-primary hover:bg-transparent hover:text-primary border border-primary rounded-sm px-8 py-2 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
