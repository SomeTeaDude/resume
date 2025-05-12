import LanguageCircle from "./LanguageCircle";

const LanguagesSection = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-3">
      <LanguageCircle title="html" percentage={85} />
      <LanguageCircle title="css" percentage={90} />
      <LanguageCircle title="js" percentage={80} />
      <LanguageCircle title="php" percentage={70} />
      <LanguageCircle title="node.js" percentage={45} />
      <LanguageCircle title="ts" percentage={30} />
    </div>
  );
};

export default LanguagesSection;
