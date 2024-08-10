import { LuGithub, LuTwitter } from "react-icons/lu";
import SidebarFooterLink from "./SidebarFooterLink";
import {
	FaBehance,
	FaDribbble,
	FaGithub,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa6";

const SidebarFooter = () => {
	return (
		<div className="absolute bottom-0 start-0 flex justify-center items-center gap-4 w-full py-3 shadow-3xl dark:shadow-gray-900">
			<SidebarFooterLink>
				<FaTwitter />
			</SidebarFooterLink>
			<SidebarFooterLink>
				<FaGithub />
			</SidebarFooterLink>
			<SidebarFooterLink>
				<FaBehance />
			</SidebarFooterLink>
			<SidebarFooterLink>
				<FaDribbble />
			</SidebarFooterLink>
			<SidebarFooterLink>
				<FaLinkedin />
			</SidebarFooterLink>
		</div>
	);
};

export default SidebarFooter;
