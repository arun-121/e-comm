import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider, useSelector } from "react-redux";
import CartPage from "./components/CartPage";
import {
  ThemeProvider,
  DialogsManager,
  Toastr,
} from "@sparrowengg/twigs-react";
import HomePage from "./components/HomePage";
import theme from "./twigs.config";
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import CheckOutPage from "./components/CheckOutPage";
import OrderSummary from "./components/OrderSummary";
import ShippingAddress from "./components/ShippingAddress";

import FilterUI from "./components/FilterUI";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
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
          <Route path="/" element={<App />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/searchbar" element={<SearchBar />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="filter" element={<FilterUI />} />
        </Routes>
      </Router>
    </>
  );
}
