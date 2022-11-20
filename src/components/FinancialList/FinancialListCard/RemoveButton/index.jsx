import { IoMdTrash } from "react-icons/io";

import "./style.css";

export const RemoveButton = ({ removeTransaction, id }) => {
  return (
    <button className="removeTransaction" onClick={() => removeTransaction(id)}>
      <IoMdTrash />
    </button>
  );
};
