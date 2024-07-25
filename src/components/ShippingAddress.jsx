import { Flex, Text, Textarea } from "@sparrowengg/twigs-react";
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
        gap: "$5",
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
