import images from "../../constants/images/images";
import "./invoiceList.css";

const InvoiceList = () => {
  return (
    <div className="invoices__wrapper">
      <div className="invoices">
        <div className="invoice__header">
          <div className="invoice__text">
            <h1 className="invoice__title">Invoices</h1>
            <p className="invoice__subtitle">There are a total of 8 invoices.</p>
          </div>
          <div className="invoice__filter">
            <p>Filter by status</p>
            <img src={images.downArrow} alt="Down Arrow" />
          </div>
          <div className="invoice__btn">
            <img src={images.add} alt="Add icon" />
            <p>New Invoice</p>
          </div>
        </div>
        <div className="invoice__list"></div>
      </div>
    </div>
  );
};

export default InvoiceList;
