import { Flex } from "@sparrowengg/twigs-react";
import CartItems from "../components/CartItems";
import BagItems from "../components/BagItems";
import SideBar from "../components/SideBar";

import { CheckoutDialog } from "../components/CheckoutDialog";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
const CheckOutPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Flex css={{ height: "100%", gap: "30px" }}>
      <Flex>
        <SideBar />
      </Flex>
      <Flex flexDirection="column" css={{ gap: "$10", width: "100%" }}>
        {cart.length !== 0 ? (
          <>
            <CartItems />
            <CheckoutDialog />
          </>
        ) : (
          <EmptyCart />
        )}
      </Flex>
      <Flex>{cart.length !== 0 && <BagItems />}</Flex>
    </Flex>
  );
};

export default CheckOutPage;
