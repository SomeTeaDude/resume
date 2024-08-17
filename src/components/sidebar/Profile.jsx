import Logo from "../ui/Logo";

const Profile = () => {
  return (
    <div className="p-8 bg-main-1 shadow-3xl transition-all duration-750">
      <div className="flex justify-center items-center">
        {/* <img
					src="/img/profile-img.jpg"
					alt="profile"
					className="w-24 h-24 rounded-full"
				/> */}
        <div className="w-24 h-24">
          <Logo w="96" h="96" />
        </div>
      </div>
      <p className="mt-2 font-bold font-dast-nevis text-slate-800 dark:text-slate-200 text-center">
        طاها شاملی
      </p>
      <p className="mt-2 text-sm text-secondary text-center">
        فرانت و بک اند کار
      </p>
      <p className="mt-1 text-sm text-secondary text-center">
        دانش آموز پایه یازدهم
      </p>
    </div>
  );
};

export default Profile;
