import "./App.css";
import { routes } from "./Routes";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Layout from "./Components/layout/Layout";
import FormSingUp from "./Pages/FormSingUp";
import FormLogin from "./Pages/FormLogin";
import Product from "./Pages/Product";
import Booking from "./Pages/Booking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.login} element={<FormLogin />} />
          <Route path={routes.singin} element={<FormSingUp />} />
          <Route path={routes.product} element={<Product />} />
          <Route path={routes.booking} element={<Booking />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
