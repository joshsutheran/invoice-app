import './App.css';

import {useState} from 'react'

import Sidebar from './components/sidebar/sidebar';
import InvoiceList from './components/invoiceList/invoiceList';

import invoices from '../src/data.json'

function App() {
  const [filterActive, setFilterActive] = useState(false)

  function filterBox() {
    setFilterActive(!filterActive)
  }

  return (
    <div className="main__wrapper">
      <Sidebar />
      <InvoiceList invoices={invoices} filterActive={filterActive} filter={filterBox} />
    </div>
  );
}

export default App;
