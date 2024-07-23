import { Flex, Popover, Text } from "@sparrowengg/twigs-react";
import ProductDetailView from "./ProductDetailView";
import SideBar from "./SideBar";
import Bag from "./Bag";
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
