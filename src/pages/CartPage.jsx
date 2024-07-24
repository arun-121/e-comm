import { Flex } from "@sparrowengg/twigs-react";
import SideBar from "../components/SideBar";
import CartItems from "../components/CartItems";
import BagItems from "../components/BagItems";
import { useSelector } from "react-redux";
const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Flex css={{ height: "100vh" }}>
        <SideBar />
        <Flex flexDirection="column" css={{ width: "100%" }}>
          <CartItems />
        </Flex>
        <Flex>{cart.length !== 0 && <BagItems />}</Flex>
      </Flex>
    </>
  );
};

export default CartPage;
