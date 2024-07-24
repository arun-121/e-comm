import { Flex, Popover, Text, Button } from "@sparrowengg/twigs-react";
import SideBar from "../components/SideBar";
import CartItems from "../components/CartItems";
import BagItems from "../components/BagItems";
const CartPage = () => {
  return (
    <>
      <Flex css={{ height: "100vh" }}>
        <SideBar />
        <Flex flexDirection="column">
          <CartItems />
        </Flex>
        <Flex>
          <BagItems />
        </Flex>
      </Flex>
    </>
  );
};

export default CartPage;
