import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Button, Heading } from "@sparrowengg/twigs-react";
import { setTotalAmount } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
const BagItems = () => {
  const cart = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) => state.totalAmount);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;

    cart.forEach((ele) => {
      total = total + Number(ele.cartCount) * Number(ele.price);
    });
    total = Number(total.toFixed(3));
    dispatch(setTotalAmount(total));
  }, [cart]);
  return (
    <Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        css={{ width: "300px", height: "100%" }}
      >
        <Heading
          size="h2"
          css={{
            marginBlock: "$15",
            textAlign: "center",
          }}
        >
          My Bag
        </Heading>

        <Flex
          css={{ overflow: "auto" }}
          gap="$5"
          justifyContent="center"
          wrap="wrap"
        >
          {cart.map((cartItem) => (
            <Flex
              justifyContent="center"
              alignItems="center"
              key={cartItem.id}
              css={{
                width: "90px",
                height: "90px",
                background: "$white900",
                borderRadius: "100%",
                position: "relative",
              }}
            >
              <img
                src={cartItem.image}
                alt="product"
                width={"40px"}
                height={"40px"}
              />
              <Flex
                css={{
                  position: "absolute",
                  width: "$5",
                  height: "$5",
                  borderRadius: "100%",
                  top: 10,
                  left: 0,
                  background: "$negative500",
                  color: "$white900",
                }}
              >
                <Text css={{ textAlign: "center", width: "100%" }}>
                  {cartItem.cartCount}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
        {!cart.length && (
          <Flex flexDirection="column">
            <Text
              css={{
                textAlign: "center",
                fontSize: "$md",
                fontWeight: "$50",
              }}
            >
              Your cart is empty
            </Text>
            <Flex justifyContent="center" alignItems="center">
              <img
                src={
                  "https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                }
                width={"80px"}
                height={"80px"}
                alt="empty cart"
              />
            </Flex>
          </Flex>
        )}
        <Flex flexDirection="column" gap="$2">
          <Text weight={"bold"} css={{ textAlign: "center" }}>
            {`Bag Total : ₹${totalAmount}`}
          </Text>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            css={{ marginBottom: "$2", padding: "$2" }}
          >
            <Button css={{ padding: "$10" }} onClick={() => navigate("/cart")}>
              View cart
            </Button>
            <Button
              css={{ padding: "$10" }}
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default BagItems;
