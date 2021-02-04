import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./routes";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <React.StrictMode>
          <PersistGate persistor={persistor}>
            <Routes />
          </PersistGate>
        </React.StrictMode>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
