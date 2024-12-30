import AdressLine from "./AdressLine";

const AdressSection = () => {
  return (
    <div className="flex flex-col justify-between gap-2">
      <AdressLine title="استان" value="مازندران" />
      <AdressLine title="شهرستان" value="نکا" />
      <AdressLine title="سن" value="17" />
    </div>
  );
};

export default AdressSection;
