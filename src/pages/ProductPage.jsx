import { Flex, Popover, Text } from "@sparrowengg/twigs-react";
import ProductDetailView from "../components/ProductDetailView";
import SideBar from "../components/SideBar";
import Bag from "../components/Bag";
const ProductPage = () => {
  return (
    <>
      <Flex css={{ height: "100vh" }} gap="10px">
        <Flex>
          <SideBar />
        </Flex>
        <Flex>
          <ProductDetailView />
        </Flex>
        <Flex>
          <Bag />
        </Flex>
      </Flex>
    </>
  );
};

export default ProductPage;
