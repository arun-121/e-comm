import { Flex } from "@sparrowengg/twigs-react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import BagItems from "../components/BagItems";
import ProductList from "../components/ProductList";
import FilterMenu from "../components/FilterMenu";

const HomePage = () => {
  return (
    <Flex css={{ gap: "$5", height: "100%" }}>
      <SideBar />
      <FilterMenu />
      <Flex flexDirection="column" css={{ width: "100%" }}>
        <SearchBar />
        <ProductList />
      </Flex>
      <BagItems />
    </Flex>
  );
};

export default HomePage;
