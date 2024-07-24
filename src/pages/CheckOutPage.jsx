import { Flex, Button, toast } from "@sparrowengg/twigs-react";
import CartItems from "../components/CartItems";
import BagItems from "../components/BagItems";
import SideBar from "../components/SideBar";

import { DialogUI } from "../components/DialogUI";
const CheckOutPage = () => {
  return (
    <Flex css={{ height: "100%", gap: "30px" }}>
      <Flex>
        <SideBar />
      </Flex>
      <Flex
        // justifyContent="space-between"
        flexDirection="column"
        css={{ gap: "$10" }}
      >
        <CartItems />
        <DialogUI />
      </Flex>
      <Flex>
        <BagItems />
      </Flex>
    </Flex>
  );
};

export default CheckOutPage;
