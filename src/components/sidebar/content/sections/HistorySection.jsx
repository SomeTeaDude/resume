import HistoryCard from "../../../pageSections/sections/items/HistoryCard";
import HistoryColumn from "../../../pageSections/sections/items/HistoryColumn";
import SectionTitle from "../../../pageSections/sections/items/SectionTitle";

const HistorySection = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <SectionTitle>تاریخچه</SectionTitle>
        <HistoryColumn>
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </HistoryColumn>
      </div>
      <div>
        <SectionTitle>تحصیلات</SectionTitle>
        <HistoryColumn>
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </HistoryColumn>
      </div>
    </div>
  );
};

export default HistorySection;
