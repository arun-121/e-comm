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
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        gap="$5"
        css={{ width: "300px", overflow: "scroll", height: "100%" }}
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
          css={{ flexWrap: "wrap", overflow: "scroll" }}
          gap="$5"
          justifyContent="center"
        >
          {cart.map((ele) => (
            <Flex
              justifyContent="center"
              alignItems="center"
              key={ele.id}
              css={{
                width: "90px",
                height: "90px",
                background: "#ffffff",
                borderRadius: "100%",
                position: "relative",
              }}
            >
              <img src={ele.image} alt="" width={"40px"} height={"40px"} />
              <Flex
                css={{
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  borderRadius: "100%",
                  top: 10,
                  left: 0,
                  background: "red",
                  color: "#ffffff",
                }}
              >
                <Text css={{ textAlign: "center", width: "100%" }}>
                  {ele.cartCount}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
        {cart.length == 0 && (
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
                alt=""
              />
            </Flex>
          </Flex>
        )}
        <Text weight={"bold"} css={{ textAlign: "center" }}>
          Bag Total : ₹ {totalAmount}
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
    </>
  );
};
export default BagItems;
