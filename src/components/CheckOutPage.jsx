import Bag from "./Bag";
import { Flex, Button, toast } from "@sparrowengg/twigs-react";
import SideBar from "./SideBar";
import OrderSummary from "./OrderSummary";
import ShippingAddress from "./ShippingAddress";
import CartItems from "./CartItems";
import { DialogUI } from "./DialogUI";

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
