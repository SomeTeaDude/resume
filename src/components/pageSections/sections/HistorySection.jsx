import HistoryCard from "./items/HistoryCard";
import HistoryColumn from "./items/HistoryColumn";
import SectionTitle from "./items/SectionTitle";

const HistorySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
