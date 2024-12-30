const SidebarFooterLink = ({ href = "#", children }) => {
  return (
    <a
      href={href}
      className="text-sm text-secondary hover:text-primary transition-all duration-200"
    >
      {children}
    </a>
  );
};

export default SidebarFooterLink;
