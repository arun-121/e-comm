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
        <Text css={{ color: "$neutral500" }}>Items:</Text>
        <Text css={{ color: "$neutral500" }}>{totalAmount}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text css={{ color: "$neutral500" }}>Estimated GST:</Text>
        <Text css={{ color: "$neutral500" }}>
          {(totalAmount * 0.18).toFixed(2)}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text css={{ color: "$neutral500" }}>Discount</Text>
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
      <Flex
        css={{
          borderWidth: "$xs",
          borderColor: "$neutral500",
          borderStyle: "solid",
        }}
      />
      <Flex justifyContent="space-between">
        <Text css={{ color: "$primary" }}>Order Total</Text>
        <Text css={{ color: "$primary" }}>
          {(
            0.18 * totalAmount +
            totalAmount -
            discount * (0.18 * totalAmount + totalAmount)
          ).toFixed(3)}
        </Text>
      </Flex>
      <Flex
        css={{
          borderWidth: "$xs",
          borderColor: "$neutral500",
          borderStyle: "solid",
        }}
      />
      <Button
        size="md"
        onClick={() => {
          !address.trim()
            ? toast({
                variant: "error",
                title: "Invalid Address",
                description: "Address cannot be empty",
              })
            : toast({
                variant: "success",
                title: "Order confirmed",
                description: `Your order will be delivered to ${address} `,
              });
        }}
      >
        Place Your Order
      </Button>
    </Flex>
  );
};

export default OrderSummary;
