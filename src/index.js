import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IconContext } from "react-icons";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IconContext.Provider
        value={{
          size: "1.3em",
          style: { verticalAlign: "middle", marginRight: "8px" },
        }}
      >
        <ToastContainer />
        <App />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
