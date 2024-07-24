import { Button, Flex, Text } from "@sparrowengg/twigs-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
      css={{ padding: "$10", gap: "$5", overflow: "scroll" }}
    >
      <Flex gap="$10">
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
          <Flex flexDirection="column" gap="$15">
            <Text
              weight={"bold"}
              css={{ lineHeight: "normal", fontSize: "$3xl" }}
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
            <Flex alignItems="center" gap="$15">
              <Flex alignItems="center" gap="$5">
                <ReactStarsRating
                  id={id}
                  isEdit={false}
                  value={selectedProduct?.rating.rate}
                />
                <Text weight={"bold"}>{selectedProduct?.rating.rate}/5</Text>
              </Flex>
              <Flex alignItems="center" gap="$5">
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
