import Input from "../../ui/Input";
import SectionTitle from "./items/SectionTitle";
import Textarea from "../../ui/Textarea";
import { FiAtSign, FiMail, FiUser } from "react-icons/fi";
import Button from "../../ui/Button";

const GetInTouchSection = () => {
  return (
    <div className="mb-8">
      <SectionTitle>در ارتباط باشید</SectionTitle>
      <div className="bg-matte shadow-4xl p-7 transition-all duration-750">
        <div className="w-full my-6">
          <Input placeholder="نام" icon={<FiUser />} />
        </div>
        <div className="w-full my-6">
          <Input placeholder="ایمیل" icon={<FiAtSign />} />
        </div>
        <div className="w-full my-6">
          <Textarea placeholder="پیام" icon={<FiMail />} lines={5} />
        </div>
        <div className="mt-6">
          <Button>ارسال پیام</Button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
