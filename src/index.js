import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import Routes from "./routes";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
