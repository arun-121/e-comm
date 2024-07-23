import { Flex } from "@sparrowengg/twigs-react";

import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import CartPage from "../components/CartPage";
import Bag from "../components/Bag";
import ProductList from "../components/ProductList";
import FilterUI from "../components/FilterMenu";
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
