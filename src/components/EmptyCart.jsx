import { useNavigate } from "react-router-dom";
import { Flex, Heading, Text, Button } from "@sparrowengg/twigs-react";
const EmptyCart = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/home");
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        css={{ height: "100%" }}
      >
        <Heading css={{ textAlign: "center" }}>
          Your cart is currently empty!
        </Heading>
        <img src={"./empty-cart.png"} alt="" />
        <Text css={{ maxWidth: "400px", textAlign: "center" }}>
          Before proceed to checkout you must add some products to your shopping
          cart.You will find a lot of interesting products on our home page
        </Text>
        <Button onClick={handleNavigate} size="lg">
          {" "}
          Return home
        </Button>
      </Flex>
    </>
  );
};

export default EmptyCart;
