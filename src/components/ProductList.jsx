import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Button, Text, toast } from "@sparrowengg/twigs-react";
import { addToCart, setProducts } from "../redux/actions";

import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const products = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (id, title) => {
    //toast
    dispatch(addToCart(id));
    toast({
      variant: "default",
      title: "Product added",
      description: title,
    });
  };

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(setProducts(json));
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
    console.log("rendered");
  }, []);

  useEffect(() => {
    // console.log("products filtered");
  }, [filteredProducts]);
  return (
    <>
      <Flex
        // justifyContent="space-between"
        onScroll={(e) => {
          if (
            e.target.scrollHeight - e.target.scrollTop ===
            e.target.clientHeight
          ) {
            console.log("reached");
          }
        }}
        css={{
          flexWrap: "wrap",
          gap: "20px",
          overflow: "scroll",
          padding: "5px",
          width: "100%",
        }}
      >
        {(filteredProducts.length == 0 ? products : filteredProducts).map(
          (ele) => (
            <Flex
              key={ele.id}
              flexDirection="column"
              css={{
                width: "260px",
                height: "330px",
                justifyContent: "space-between",
                padding: "5px",
                borderRadius: "13px",
                background: "#ffffff",

                "&:hover": {
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                  color: "blue",
                },
              }}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                onClick={() => handleNavigate(ele.id)}
                css={{
                  cursor: "pointer",
                  height: "220px",
                  background: "#ffffff",
                  borderRadius: "10px",
                }}
              >
                <img src={ele.image} alt="" width={"180px"} height={"180px"} />
              </Flex>
              <Flex>
                <Text
                  css={{
                    fontWeight: "bold",
                  }}
                >
                  {ele.title}
                </Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text css={{ color: "$primary" }}> ₹ {ele.price}</Text>
                <img
                  src={"./addToBag-sm.svg"}
                  alt=""
                  onClick={() => handleAddToCart(ele.id, ele.title)}
                  style={{ cursor: "pointer" }}
                />
              </Flex>
            </Flex>
          )
        )}

        {isLoading && (
          <>
            <Flex
              justifyContent="center"
              css={{
                flexWrap: "wrap",
                gap: "20px",
                overflow: "scroll",
                padding: "5px",
                width: "100%",
              }}
            >
              {new Array(20).fill("").map((ele, i) => (
                <Flex
                  key={i}
                  css={{
                    width: "260px",
                    height: "330px",
                    // justifyContent: "space-between",
                    padding: "5px",
                    background: "lightgray",
                  }}
                ></Flex>
              ))}
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};
export default ProductList;
