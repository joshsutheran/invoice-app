import './App.css';

import Sidebar from './components/sidebar/sidebar';
import InvoiceList from './components/invoiceList/invoiceList';

function App() {
  return (
    <div className="main__wrapper">
      <Sidebar />
      <InvoiceList />
    </div>
  );
}

export default App;
