const SidebarFooterLink = ({ href = "#", children, ...props }) => {
  return (
    <a
      href={href}
      className="text-sm text-secondary hover:text-primary transition-all duration-200"
      {...props}
    >
      {children}
    </a>
  );
};

export default SidebarFooterLink;
