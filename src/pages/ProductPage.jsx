import { Flex } from "@sparrowengg/twigs-react";
import ProductDetailView from "../components/ProductDetailView";
import SideBar from "../components/SideBar";
import BagItems from "../components/BagItems";
const ProductPage = () => {
  return (
    <Flex css={{ height: "100%" }} gap="$5">
      <SideBar />
      <ProductDetailView />
      <BagItems />
    </Flex>
  );
};

export default ProductPage;
