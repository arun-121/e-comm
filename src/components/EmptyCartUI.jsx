import { Flex, Popover, Text, Button } from "@sparrowengg/twigs-react";
import { useNavigate } from "react-router-dom";
const EmptyCartUI = () => {
  const navigate = useNavigate();
  return (
    <>empty cart</>
    // <Flex
    //   flexDirection="column"
    //   justifyContent="center"
    //   alignItems="center"
    //   css={{ width: "100%", height: "100%", gap: "20px" }}
    // >
    //   <Text css={{ fontSize: "3rem" }} weight="bold">
    //     Your cart is empty
    //   </Text>
    //   <Text css={{ color: "gray" }}>
    //     Looks like you havent added any products to your cart
    //   </Text>
    //   <img
    //     src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
    //     alt=""
    //   />
    //   <Button
    //     css={{ padding: "20px" }}
    //     size="md"
    //     onClick={() => navigate("/home")}
    //   >
    //     Return Home
    //   </Button>
    // </Flex>
  );
};

export default EmptyCartUI;
