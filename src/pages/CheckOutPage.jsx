import { Flex, Button, toast } from "@sparrowengg/twigs-react";
import CartItems from "../components/CartItems";
import Bag from "../components/Bag";
import SideBar from "../components/SideBar";

import { DialogUI } from "../components/DialogUI";
const CheckOutPage = () => {
  return (
    <Flex css={{ height: "100vh", gap: "30px" }}>
      <Flex>
        <SideBar />
      </Flex>
      <Flex
        // justifyContent="space-between"
        flexDirection="column"
        css={{ gap: "20px" }}
      >
        <CartItems />
        <DialogUI />
      </Flex>
      <Flex>
        <Bag />
      </Flex>
    </Flex>
  );
};

export default CheckOutPage;
