import { useDispatch, useSelector } from "react-redux";
import { Flex, Popover, Text, Button } from "@sparrowengg/twigs-react";
import { removeFromCart, setTotalAmount } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
const Bag = () => {
  const cart = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) => state.totalAmount);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let tot = 0;
    cart.forEach((ele) => {
      tot = tot + Number(ele.cartCount) * Number(ele.price);
    });
    tot = Number(tot.toFixed(3));
    dispatch(setTotalAmount(tot));
  }, [cart]);

  // const bagTotal = useMemo(() => {
  //   let tot = 0;
  //   cart.forEach((ele) => {
  //     tot = tot + Number(ele.cartCount) * Number(ele.price);
  //   });
  //   return tot.toFixed(2);
  // }, [cart]);
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        gap="10px"
        css={{ width: "300px", overflow: "scroll", height: "100%" }}
      >
        <Text
          css={{
            marginTop: "30px",
            marginBottom: "30px",
            height: "50px",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          My Bag
        </Text>
        <Flex
          css={{ flexWrap: "wrap", overflow: "scroll" }}
          gap="10px"
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
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <img src={ele.image} alt="" width={"80px"} height={"80px"} />
              <Flex
                css={{
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  borderRadius: "100%",
                  top: 0,
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
                fontSize: "1.5rem",
                fontWeight: "500",
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
          css={{ marginBottom: "5px", padding: "5px" }}
        >
          <Button css={{ padding: "20px" }} onClick={() => navigate("/cart")}>
            View cart
          </Button>
          <Button
            css={{ padding: "20px" }}
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export default Bag;
