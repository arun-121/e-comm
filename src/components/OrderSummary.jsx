import { Flex, Select, Text, Button, toast } from "@sparrowengg/twigs-react";
import { useState } from "react";
import { useSelector } from "react-redux";
const OrderSummary = () => {
  const address = useSelector((state) => state.address);
  const [discount, setDiscount] = useState(0);
  const totalAmount = useSelector((state) => state.totalAmount);
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      gap="$5"
      css={{
        borderRadius: "10px",
      }}
    >
      <Text weight={"bold"}>Order Summary</Text>
      <Flex justifyContent="space-between">
        <Text css={{ color: "gray" }}>Items:</Text>
        <Text css={{ color: "gray" }}>{totalAmount}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text css={{ color: "gray" }}>Estimated GST:</Text>
        <Text css={{ color: "gray" }}>{(totalAmount * 0.18).toFixed(2)}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text css={{ color: "gray" }}>Discount</Text>
        <Select
          onChange={(e) => setDiscount(Number(e.value))}
          options={[
            {
              label: "10%",
              value: 0.1,
            },
            {
              label: "20%",
              value: 0.2,
            },
            {
              label: "30%",
              value: 0.3,
            },
          ]}
        />
      </Flex>
      <Flex css={{ border: "solid 1px gray" }}></Flex>
      <Flex justifyContent="space-between">
        <Text css={{ color: "red" }}>Order Total</Text>
        <Text css={{ color: "red" }}>
          {(
            0.18 * totalAmount +
            totalAmount -
            discount * (0.18 * totalAmount + totalAmount)
          ).toFixed(3)}
        </Text>
      </Flex>
      <Flex css={{ border: "solid 1px gray" }}></Flex>
      <Button
        size="md"
        onClick={() =>
          address === "" || address === null
            ? toast({
                variant: "error",
                title: "Invalid Address",
                description: "Address cannot be empty",
              })
            : toast({
                variant: "success",
                title: "Order confirmed",
                description: `Your order will be delivered to ${address} `,
              })
        }
      >
        Place Your Order
      </Button>
    </Flex>
  );
};

export default OrderSummary;
