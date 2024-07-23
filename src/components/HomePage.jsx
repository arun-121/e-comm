import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Button, Text } from "@sparrowengg/twigs-react";
import { addToCart, setProducts } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import CartPage from "./CartPage";
import Bag from "./Bag";
import ProductList from "./ProductList";
import FilterUI from "./FilterUI";
const HomePage = () => {
  return (
    <Flex css={{ gap: "10px", height: "100vh" }}>
      <SideBar />
      {/* <Flex css={{ width: "300px", background: "aliceblue" }}> */}
      <FilterUI />
      {/* </Flex> */}

      <Flex flexDirection="column" css={{ width: "100%" }}>
        <SearchBar />
        <ProductList />
      </Flex>
      <Flex>
        <Bag />
      </Flex>
    </Flex>
  );
};

export default HomePage;
