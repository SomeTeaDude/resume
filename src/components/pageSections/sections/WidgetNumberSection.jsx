import WidgetNumber from "./items/WidgetNumber";

const WidgetNumberSection = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-9 xl:gap-0 mt-6 xl:mt-0">
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
