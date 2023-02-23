import "./App.css";
import { routes } from "./Routes";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Layout from "./Components/layout/Layout";
import FormSingIn from "./Pages/FormSingIn";
import FormLogin from "./Pages/FormLogin";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.login} element={<FormLogin />} />
          <Route path={routes.singin} element={<FormSingIn />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
