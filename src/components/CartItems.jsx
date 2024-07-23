import ReactStarsRating from "react-awesome-stars-rating";
import { addToCart, removeFromCart } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Popover, Text, Button } from "@sparrowengg/twigs-react";
import EmptyCartUI from "./EmptyCartUI";
const CartItems = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCartUI />
      ) : (
        <Flex flexDirection="column" css={{ overflow: "scroll" }}>
          <Text
            css={{
              marginBottom: "30px",
              marginTop: "30px",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Review Your Bag Items
          </Text>
          <Flex
            flexDirection="column"
            css={{ overflow: "scroll", gap: "30px", padding: "20px" }}
          >
            {cart.map((ele) => (
              <Flex
                key={ele.id}
                css={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  gap: "10px",
                  padding: "10px",
                }}
              >
                <Flex
                  onClick={() => navigate(`/product/${ele.id}`)}
                  css={{ cursor: "pointer" }}
                >
                  <img
                    src={ele.image}
                    alt=""
                    width={"300px"}
                    height={"300px"}
                  />
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  css={{ width: "100%" }}
                >
                  <Text css={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                    {ele.title}
                  </Text>
                  <Text css={{ color: "#60695C" }}>{ele.category}</Text>
                  <Text css={{ color: "$primary" }}>{ele.description}</Text>
                  <Flex alignItems="center" gap="10px">
                    <ReactStarsRating isEdit={false} value={ele.rating.rate} />
                    <Text weight={"bold"}>{ele.rating.rate}/5</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text weight={"bold"}>₹ {ele.price}</Text>
                    <Flex gap="10px">
                      <Text
                        onClick={() => {
                          dispatch(removeFromCart(ele.id));
                        }}
                        css={{ color: "red", cursor: "pointer" }}
                        weight={"bold"}
                      >
                        -
                      </Text>
                      <Text weight={"bold"}>{ele.cartCount}</Text>
                      <Text
                        weight={"bold"}
                        onClick={() => {
                          dispatch(addToCart(ele.id));
                        }}
                        css={{ color: "green", cursor: "pointer" }}
                      >
                        +
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default CartItems;
