import { Flex, Popover, Text, Button } from "@sparrowengg/twigs-react";

import SideBar from "./SideBar";
import Bag from "./Bag";
import CartItems from "./CartItems";

const CartPage = () => {
  return (
    <>
      <Flex css={{ height: "100vh" }}>
        <SideBar />
        <Flex flexDirection="column">
          <CartItems />
        </Flex>
        <Flex>
          <Bag />
        </Flex>
      </Flex>
    </>
  );
};

export default CartPage;
