import ContactInformationCard from "./items/ContactInformationCard";
import SectionTitle from "./items/SectionTitle";

const contactInformations = [
  [
    { title: "تلفن همراه", value: "09119595220" },
    { title: "تلفن همراه", value: "09113582072" },
    { title: "تلفن ثابت", value: "34730244" },
  ],
  [
    { title: "ایمیل", value: "shamlytaha2@gmail.com" },
    { title: "تلگرام", value: "T_Shameli" },
    { title: "ایتا", value: "taha891" },
  ],
  [
    { title: "خیابان", value: "انقلاب 20" },
    { title: "کوچه", value: "اسفندیاری 4" },
    { title: "پلاک", value: "3" },
  ],
];

const ContactInformationSection = () => {
  return (
    <div>
      <SectionTitle>اطلاعات تماس</SectionTitle>
      <div className="flex justify-between items-center gap-4 h-full">
        {contactInformations.map((contactInformation, index) => (
          <ContactInformationCard
            key={index}
            informations={contactInformation}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInformationSection;
