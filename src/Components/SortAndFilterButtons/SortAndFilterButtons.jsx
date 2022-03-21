export const SortAndFilterButtons = ({ Sort }) => {
  return (
    <div className="sortButtons">
      {/*
          Create 4 sorting buttons here to sort by following criteria:
  export const SortAndFilterButtons = ({ handleSort }) => {

          sort title in Ascending order  class: sortByTitleAsc
          sort title in Descending order class: sortByTitleDesc
          sort price asending order      class: sortByPriceAsc
          sort price descending order    class: sortByPriceDesc
  
          on every button click, call the reusable sorting function
          you received from Parent component, 
          and sort the data.
  
          
        */}

      <button className="sortByTitleAsc" onClick={() => {}}>
        sortByTitleAsc
      </button>
      <button className="sortByTitleDesc" onClick={() => {}}>
        sortByTitleDesc
      </button>

      <button className="sortByPriceAsc" onClick={() => {}}>
        sortByPriceAsc
      </button>
      <button className="sortByPriceDesc" onClick={() => {}}>
        sortByPriceDesc
      </button>
    </div>
  );
};
