const Profile = () => {
	return (
		<div className="p-8 shadow-lg dark:shadow-gray-900">
			<div className="flex justify-center items-center">
				<img
					src="/img/profile-img.jpg"
					alt="profile"
					className="w-24 h-24 rounded-full"
				/>
			</div>
			<p className="mt-2 text-slate-800 dark:text-slate-200 text-center">
				طاها شاملی
			</p>
			<p className="mt-2 text-xs text-slate-400 text-center">
				فرانت و بک اند کار
			</p>
			<p className="mt-1 text-xs text-slate-400 text-center">
				دانش آموز پایه یازدهم تجربی
			</p>
		</div>
	);
};

export default Profile;
