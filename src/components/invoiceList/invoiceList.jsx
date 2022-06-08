import images from "../../constants/images/images";
import FilterBox from "../filterBox/filterBox";

import { useState } from "react";

import "./invoiceList.css";

const InvoiceList = (props) => {
  const [checkedPaid, setCheckedPaid] = useState(false)
  const [checkedPending, setCheckedPending] = useState(false)
  const [checkedDraft, setCheckedDraft] = useState(false)

  function filterChange(event) {
    if (event.currentTarget.id === "filter-paid") {
      setCheckedPaid(!checkedPaid)
    } else if (event.currentTarget.id === 'filter-pending') {
      setCheckedPending(!checkedPending)
    } else if (event.currentTarget.id === 'filter-draft') {
      setCheckedDraft(!checkedDraft)
    }
  }
  return (
    <div className="invoices__wrapper">
      <div className="invoices">
        <div className="invoice__header">
          <div className="invoice__text">
            <h1 className="invoice__title">Invoices</h1>
            <p className="invoice__subtitle">
              There are a total of {props.invoices.length} invoices.
            </p>
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
        <FilterBox
          filterChange={filterChange}
          filterPaid = {checkedPaid}
          filterPending = {checkedPending}
          filterDraft = {checkedDraft}
          filter={props.filterActive}
        />
        <div className="invoice__list">
          {
            props.invoices.filter((invoice) => {
              if (checkedPaid === false && checkedPending === false && checkedDraft === false) {
                return invoice
              } else if ((checkedPaid && checkedPending)) {
                return invoice.status === 'paid' || invoice.status === 'pending'
              } else if ((checkedPaid && checkedDraft)) {
                return invoice.status === 'paid' || invoice.status === 'draft'
              } else if(checkedPending && checkedDraft) {
                return invoice.status === 'draft' || invoice.status === 'pending'
              } else if (checkedPaid) {
                return invoice.status === 'paid'
              } else if (checkedPending) {
                return invoice.status === 'pending'
              } else if (checkedDraft) {
                return invoice.status === 'draft'
              }
            })
            .map((invoice, index) => {
            let date = new Date(invoice.paymentDue)
              .toString()
              .split("")
              .slice(0, 15)
              .join("");
            let status =
              invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1);
            return (
              <div key={index} className="invoice">
                <div className="invoice__list-left">
                  <h4>
                    <span className="hashtag">#</span>
                    {invoice.id}
                  </h4>
                  <p>Due: {date}</p>
                </div>
                <div className="invoice__list-right">
                  <div
                    style={{
                      backgroundColor:
                        invoice.status === "paid"
                          ? "rgb(0,255,0, 0.08)"
                          : invoice.status === "pending"
                          ? "rgba(255, 143, 0, 0.06)"
                          : "rgba(55, 59, 83, 0.06)",
                    }}
                    className="invoice__list-btn"
                  >
                    <div
                      style={{
                        backgroundColor:
                          invoice.status === "paid"
                            ? "rgb(0,100,0)"
                            : invoice.status === "pending"
                            ? "rgba(255, 143, 0)"
                            : "rgba(55, 59, 83)",
                      }}
                      className="dot"
                    ></div>
                    <p
                      style={{
                        color:
                          invoice.status === "paid"
                            ? "rgb(0,100,0)"
                            : invoice.status === "pending"
                            ? "rgba(255, 143, 0)"
                            : "rgba(55, 59, 83)",
                      }}
                    >
                      {status}
                    </p>
                  </div>
                  <div className="invoice__list-arrow">
                    <img src={images.rightArrow} alt="Right Arrow" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;
