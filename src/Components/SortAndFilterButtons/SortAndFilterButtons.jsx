export const SortAndFilterButtons = ({
  handleSort,
  DescName,
  SortByPrice,
  DescPrice,
}) => {
  return (
    <div className="sortButtons" onClick={handleSort}>
      <button
        className="sortByTitleAsc"
        onClick={() => {
          handleSort();
        }}
      >
        sortByTitleAsc
      </button>
      <button
        className="sortByTitleDesc"
        onClick={() => {
          DescName();
        }}
      >
        sortByTitleDesc
      </button>

      <button
        className="sortByPriceAsc"
        onClick={() => {
          SortByPrice();
        }}
      >
        sortByPriceAsc
      </button>
      <button
        className="sortByPriceDesc"
        onClick={() => {
          DescPrice();
        }}
      >
        sortByPriceDesc
      </button>
    </div>
  );
};
