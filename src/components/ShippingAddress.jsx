import { Flex, Text, Button, Textarea } from "@sparrowengg/twigs-react";
import { useSelector } from "react-redux";
import { SetAddress } from "../redux/actions";
import { useDispatch } from "react-redux";
const ShippingAddress = () => {
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();

  return (
    <Flex
      flexDirection="column"
      css={{
        background: "white",
        // padding: "10px",
        // height: "100px",
        // width: "300px",
        gap: "10px",
        borderRadius: "10px",
      }}
    >
      <Flex justifyContent="space-between">
        <Text weight={"bold"}>Shipping Address</Text>
      </Flex>
      <Textarea
        onChange={(e) => dispatch(SetAddress(e.target.value))}
        resize="none"
        rows="4"
        placeholder="Enter your description"
      />
    </Flex>
  );
};

export default ShippingAddress;
