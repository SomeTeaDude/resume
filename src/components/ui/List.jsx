const List = ({ children }) => {
	return (
		<ul className="flex flex-col justify-between items-start gap-2">
			{children}
		</ul>
	);
};

export default List;
