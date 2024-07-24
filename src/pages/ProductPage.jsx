import { Flex } from "@sparrowengg/twigs-react";
import ProductDetailView from "../components/ProductDetailView";
import SideBar from "../components/SideBar";
import BagItems from "../components/BagItems";
const ProductPage = () => {
  return (
    <>
      <Flex css={{ height: "100%" }} gap="$5">
        <Flex>
          <SideBar />
        </Flex>
        <Flex>
          <ProductDetailView />
        </Flex>
        <Flex>
          <BagItems />
        </Flex>
      </Flex>
    </>
  );
};

export default ProductPage;
