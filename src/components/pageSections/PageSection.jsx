const PageSection = ({ children, className = "", id }) => {
  return (
    <div className={`px-6 py-3 ${className}`} id={id}>
      {children}
    </div>
  );
};

export default PageSection;
