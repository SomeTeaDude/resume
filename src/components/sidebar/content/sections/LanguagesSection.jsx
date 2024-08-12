import LanguageCircle from "./LanguageCircle";

const LanguagesSection = () => {
	return (
		<div className="flex flex-col justify-start gap-3">
			<div className="flex justify-between items-center gap-8">
				<LanguageCircle title="html" percentage={85} />
				<LanguageCircle title="css" percentage={90} />
				<LanguageCircle title="js" percentage={80} />
			</div>
			<div className="flex justify-between items-center gap-8">
				<LanguageCircle title="php" percentage={70} />
				<LanguageCircle title="node.js" percentage={45} />
				<LanguageCircle title="ts" percentage={30} />
			</div>
		</div>
	);
};

export default LanguagesSection;
