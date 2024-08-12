import FrameworkProgressBar from "./FrameworkProgressBar";

const FrameworksSection = () => {
	return (
		<div className="flex flex-col justify-start gap-5 py-2">
			<FrameworkProgressBar percentage={85} title="Laravel" />
			<FrameworkProgressBar percentage={80} title="React" />
			<FrameworkProgressBar percentage={75} title="Next.js" />
			<FrameworkProgressBar percentage={35} title="Vue" />
		</div>
	);
};

export default FrameworksSection;
