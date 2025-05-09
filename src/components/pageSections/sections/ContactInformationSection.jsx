import ContactInformationCard from "./items/ContactInformationCard";
import SectionTitle from "./items/SectionTitle";

const contactInformations = [
  [
    "right",
    [
      { title: "تلفن همراه", value: "09119595220" },
      { title: "تلفن همراه", value: "09119595220" },
      { title: "تلفن ثابت", value: "09119595220" },
    ],
  ],
  [
    "bottom",
    [
      { title: "ایمیل", value: "shamlytaha2@gmail.com" },
      { title: "تلگرام", value: "TahaEasy" },
      { title: "ایتا", value: "taha891" },
    ],
  ],
  [
    "left",
    [
      { title: "خیابان", value: "انقلاب 20" },
      { title: "کوچه", value: "اسفندیاری 4" },
      { title: "پلاک", value: "3" },
    ],
  ],
];

const ContactInformationSection = () => {
  return (
    <div>
      <SectionTitle>اطلاعات تماس</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
        {contactInformations.map(
          ([animationDirection, contactInformation], index) => (
            <ContactInformationCard
              key={index}
              animationDirection={animationDirection}
              informations={contactInformation}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ContactInformationSection;
