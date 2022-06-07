import "./filterBox.css";

const FilterBox = (props) => {
  if (props.filter) {
    return (
      <div className="filterbox">
        <div className="filterbox__paid">
          <input type="checkbox" id="filter" name="paid" value="Paid" />
          <p>Paid</p>
        </div>
        <div className="filterbox__pending">
          <input type="checkbox" id="filter" name="pending" value="Pending" />
          <p>Pending</p>
        </div>
        <div className="filterbox__draft">
          <input type="checkbox" id="filter" name="draft" value="Draft" />
          <p>Draft</p>
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
