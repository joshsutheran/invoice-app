import images from "../../constants/images/images";
import FilterBox from "../filterBox/filterBox";

import "./invoiceList.css";

const InvoiceList = (props) => {
  return (
    <div className="invoices__wrapper">
      <div className="invoices">
        <div className="invoice__header">
          <div className="invoice__text">
            <h1 className="invoice__title">Invoices</h1>
            <p className="invoice__subtitle">There are a total of 8 invoices.</p>
          </div>
          <div onClick={props.filter} className="invoice__filter">
            <p>Filter by status</p>
            <img src={images.downArrow} alt="Down Arrow" />
          </div>
          <div className="invoice__btn">
            <img src={images.add} alt="Add icon" />
            <p>New Invoice</p>
          </div>
        </div>
        <FilterBox filter={props.filterActive} />
        <div className="invoice__list"></div>
      </div>
    </div>
  );
};

export default InvoiceList;
