import "./filterBox.css";

const FilterBox = (props) => {
  if (props.filter) {
    return (
      <div className="filterbox">
        <div className="filterbox__paid">
          <input onChange={props.filterChange} checked={props.filterPaid} type="checkbox" id="filter-paid" name="paid" value="Paid" />
          <label htmlFor="filter-paid">Paid</label>
        </div>
        <div className="filterbox__pending">
          <input onChange={props.filterChange} checked={props.filterPending} type="checkbox" id="filter-pending" name="pending" value="Pending" />
          <label htmlFor="filtr-pending">Pending</label>
        </div>
        <div className="filterbox__draft">
          <input onChange={props.filterChange} checked={props.filterDraft} type="checkbox" id="filter-draft" name="draft" value="Draft" />
          <label htmlFor="filter-draft">Draft</label>
        </div>
      </div>
    )
  } else {
      return (
          <div></div>
      )
  }
};

export default FilterBox;
