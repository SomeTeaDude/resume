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
		<div className="flex justify-center items-center gap-4 w-full py-3 bg-main-2 shadow-3xl transition-all duration-1000">
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
