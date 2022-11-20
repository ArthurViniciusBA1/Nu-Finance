export const FilterButton = ({
  value,
  setFilter,
  id,
  highlighted,
  setHighlighted,
}) => {
  const buttonClassName = () => {
    if (id === highlighted) {
      return "buttonHighlighted";
    }
    return "buttonCommon";
  };

  return (
    <button
      onClick={() => {
        setFilter(value);
        setHighlighted(id);
      }}
      className={buttonClassName()}
      value={value}
    >
      {value}
    </button>
  );
};
