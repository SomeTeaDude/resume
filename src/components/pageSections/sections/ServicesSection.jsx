import SectionTitle from "./items/SectionTitle";
import ServiceCard from "./items/ServiceCard";

const content =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.";

const services = [
  { title: "توسعه وب سایت", content },
  { title: "طراحی UI/UX", content },
  { title: "طراحی صدا", content },
  { title: "طراحی بازی", content },
  { title: "تبلیغات", content },
  { title: "برنامه Android/IOS", content },
];

const ServicesSection = () => {
  return (
    <div>
      <SectionTitle>خدمات قابل ارائه</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title}>
            {service.content}
          </ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
