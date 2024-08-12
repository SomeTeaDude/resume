import List from "../../../ui/List";
import ListItem from "../../../ui/ListItem";

const OtherKnowledgeSection = () => {
	return (
		<div className="py-2">
			<List>
				<ListItem>Vite, Git, Npm</ListItem>
				<ListItem>MySQL, SQL Server, MongoDB</ListItem>
				<ListItem>Bootstrap, Tailwind</ListItem>
				<ListItem>Scss, Styled Components</ListItem>
			</List>
		</div>
	);
};

export default OtherKnowledgeSection;
