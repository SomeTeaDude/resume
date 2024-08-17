import PageSection from "../pageSections/PageSection";
import Logo from "./Logo";

const Footer = () => {
  return (
    <PageSection>
      <div className="flex justify-between items-center py-4 px-8 bg-matte shadow-4xl transition-all duration-750">
        <p className="text-xs text-secondary">© 1403 تمامی حقوق محفوظ هستند</p>
        <span className="animate-[bounce_1.5s_linear_infinite]">
          <Logo w={35} h={35} />
        </span>
        <p className="text-xs text-secondary">ایمیل: shamlytaha2@gmail.com</p>
      </div>
    </PageSection>
  );
};

export default Footer;
