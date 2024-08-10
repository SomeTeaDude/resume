const SidebarFooterLink = ({ children }) => {
	return (
		<a
			href="#"
			className="text-sm text-gray-800 dark:text-slate-200 hover:text-primary transition-all duration-200"
		>
			{children}
		</a>
	);
};

export default SidebarFooterLink;
