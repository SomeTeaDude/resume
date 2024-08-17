const Textarea = ({ placeholder, icon, lines }) => {
  return (
    <div className="flex flex-row-reverse justify-start bg-main-3 transition-all duration-750">
      <textarea
        type="text"
        className="peer px-4 py-3 text-secondary w-full bg-transparent shadow-inner outline-none transition-all duration-750"
        placeholder={placeholder}
        rows={lines}
      ></textarea>
      <div className="flex justify-center items-start pt-4 text-secondary peer-focus:text-main-1 dark:text-secondary dark:peer-focus:text-main-2 bg-transparent peer-focus:bg-primary w-14 h-auto shadow-inner peer-focus:shadow-transparent transition-all duration-750">
        {icon}
      </div>
    </div>
  );
};

export default Textarea;
