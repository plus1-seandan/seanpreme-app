import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <React.StrictMode>
          <Routes />
        </React.StrictMode>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
