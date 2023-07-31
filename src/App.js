import React from "react";
import router from "./config/route";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import ThemeProviderCustom from "./utils/ThemeProvider";

//!Stylesheet import
import "@fontsource/public-sans"; // Defaults to weight 400
import "@fontsource/public-sans/400.css"; // Specify weight
import "@fontsource/public-sans/400-italic.css";
import "./styles/style.scss";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProviderCustom>
          <RouterProvider router={createBrowserRouter(router)} />
        </ThemeProviderCustom>
      </Provider>
    </>
  );
}

export default App;
