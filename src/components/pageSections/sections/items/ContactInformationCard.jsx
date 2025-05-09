import AdressLine from "../../../sidebar/content/sections/AdressLine";

const ContactInformationCard = ({ informations, animationDirection }) => {
  return (
    <div
      className={`come-from-${animationDirection} flex flex-col justify-center gap-2 h-full w-full bg-matte shadow-4xl px-6 py-8 transition-all duration-750`}
    >
      {informations.map((information, index) => (
        <AdressLine
          key={index}
          title={information.title}
          value={information.value}
        />
      ))}
    </div>
  );
};

export default ContactInformationCard;
