import { FaCheck } from "react-icons/fa";

const ListItem = ({ children }) => {
  return (
    <li className="flex justify-start items-center gap-2">
      <span className="flex items-center text-xs text-primary transition-all duration-750">
        <FaCheck />
      </span>
      <p className="text-sm text-secondary align-middle">{children}</p>
    </li>
  );
};

export default ListItem;
