import "./App.css";
import Dashboard from "./containers/Dashboard/Dashboard";
import Orders from "./containers/Orders/Orders";
import Customers from "./containers/Customers/Customers";
import Reports from "./containers/Reports/Reports";
import Integrations from "./containers/Integrations/Integrations";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="integrations" element={<Integrations />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
