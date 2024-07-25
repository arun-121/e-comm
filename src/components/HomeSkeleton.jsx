import { Flex } from "@sparrowengg/twigs-react";
import { uiConstants } from "../constants/index";
const HomeSkeleton = () => {
  return (
    <Flex
      wrap="wrap"
      justifyContent="center"
      css={{
        gap: "$10",
        overflow: "scroll",
        padding: "$2",
        width: "100%",
      }}
    >
      {new Array(uiConstants.HOME_SKELETON_ITEMS_COUNT).fill("").map((_, i) => (
        <Flex
          key={i}
          css={{
            width: "260px",
            height: "330px",
            background: "lightgray",
          }}
        />
      ))}
    </Flex>
  );
};

export default HomeSkeleton;
