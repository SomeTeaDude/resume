const AdressLine = ({ title, value }) => {
	return (
		<div className="flex justify-between items-center">
			<p className="text-sm text-slate-800 dark:text-slate-200 font-bold">
				{title}:
			</p>
			<p className="text-sm text-secondary font-light">{value}</p>
		</div>
	);
};

export default AdressLine;
