import WidgetNumber from "./items/WidgetNumber";

const WidgetNumberSection = () => {
  return (
    <div className="grid grid-cols-4">
      <WidgetNumber num={10} withPlus={true}>
        سابقه کاری
      </WidgetNumber>
      <WidgetNumber num={60}>پروژه انجام شده</WidgetNumber>
      <WidgetNumber num={45} withPlus={true}>
        مشتری خوشحال
      </WidgetNumber>
      <WidgetNumber num={23}>مدرک و تقدیرنامه</WidgetNumber>
    </div>
  );
};

export default WidgetNumberSection;
