import { Button, Flex, Popover, Text } from "@sparrowengg/twigs-react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import { addToCart } from "../redux/actions";
import { BiPurchaseTag } from "react-icons/bi";
const ProductDetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const selectedProduct = products.find((ele) => ele.id === parseInt(id));

  return (
    <Flex
      flexDirection="column"
      css={{ padding: "20px", gap: "10px", overflow: "scroll" }}
    >
      <Flex gap="20px">
        <Flex justifyContent="center" alignItems="center">
          <img
            src={selectedProduct?.image}
            alt=""
            width={"500px"}
            height={"500px"}
            style={{ borderRadius: "20px" }}
          />
        </Flex>
        <Flex justifyContent="space-between" flexDirection="column">
          <Flex flexDirection="column" gap="2rem">
            <Text
              weight={"bold"}
              css={{ lineHeight: "normal", fontSize: "32px" }}
            >
              {selectedProduct?.title}
            </Text>
            <Text
              weight={"light"}
              size={"md"}
              css={{ color: "rgb(96, 105, 92)" }}
            >
              {selectedProduct?.category}
            </Text>
            <Flex alignItems="center" gap="3rem">
              <Flex alignItems="center" gap="10px">
                <ReactStarsRating
                  id={id}
                  isEdit={false}
                  value={selectedProduct?.rating.rate}
                />
                <Text weight={"bold"}>{selectedProduct?.rating.rate}/5</Text>
              </Flex>
              <Flex alignItems="center" gap="10px">
                <BiPurchaseTag />
                <Text weight={"bold"}>{selectedProduct?.rating.count}</Text>
              </Flex>
            </Flex>
            <Text weight={"bold"} size={"lg"}>
              ₹ {selectedProduct?.price}
            </Text>
            <Text css={{ heigh: "100%" }}>{selectedProduct?.description}</Text>
          </Flex>

          <Button
            onClick={() => dispatch(addToCart(selectedProduct?.id))}
            css={{ height: "60px" }}
          >
            Add to Cart
          </Button>
        </Flex>
      </Flex>
      <Flex css={{ borderBottom: "solid 1px darkgray " }}> </Flex>
      review
      {/* <Text css={{ heigh: "100%" }}>{selectedProduct?.description}</Text> */}
    </Flex>
  );
};

export default ProductDetailView;
