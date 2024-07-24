import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";

import CartPage from "./pages/CartPage";
import {
  ThemeProvider,
  DialogsManager,
  Toastr,
} from "@sparrowengg/twigs-react";

import theme from "./utils/twigs.config";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/CheckOutPage";
import ProductPage from "./pages/ProductPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme["dark"]}>
    <Provider store={store}>
      <RouteProvider />
      <Toastr duration={1000} />
      <DialogsManager />
    </Provider>
  </ThemeProvider>
);
function RouteProvider() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}
