import { Flex } from "@sparrowengg/twigs-react";
const ShimmerUi = () => {
  return (
    <Flex
      justifyContent="center"
      css={{
        flexWrap: "wrap",
        gap: "$10",
        overflow: "scroll",
        padding: "$2",
        width: "100%",
      }}
    >
      {new Array(20).fill("").map((ele, i) => (
        <Flex
          key={i}
          css={{
            width: "260px",
            height: "330px",
            background: "lightgray",
          }}
        ></Flex>
      ))}
    </Flex>
  );
};

export default ShimmerUi;
