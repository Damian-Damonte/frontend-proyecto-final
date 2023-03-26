import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { FavsProvider } from "./context/favs.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserProvider>
      <FavsProvider>
        <App />
      </FavsProvider>
    </UserProvider>
  </BrowserRouter>
  //  </React.StrictMode>
);
