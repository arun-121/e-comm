import { Flex } from "@sparrowengg/twigs-react";

import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {};
  return (
    <Flex
      css={{ background: "white" }}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex>
        <img
          src="https://asset.brandfetch.io/id4QM--uk4/idZgawl2X6.png"
          width={"50px"}
          height={"50px"}
          alt="surveysparrow"
        />
      </Flex>
      <Flex flexDirection="column" css={{ gap: "$20" }}>
        <Flex
          css={{
            "&:hover": {
              background: "$neutral200",
              cursor: "pointer",

              scale: 1.3,
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            },
          }}
        >
          <IoHome
            onClick={() => navigate("/home")}
            style={{ width: "30px", height: "30px" }}
          />
        </Flex>
        <Flex
          css={{
            "&:hover": {
              background: "$neutral200",
              cursor: "pointer",
              scale: 1.3,
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            },
          }}
        >
          <FaShoppingCart
            onClick={() => navigate("/cart")}
            style={{ width: "30px", height: "30px" }}
          />
        </Flex>
      </Flex>
      <Flex
        css={{
          "&:hover": {
            background: "$neutral200",
            cursor: "pointer",

            scale: 1.3,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          },
        }}
      >
        <FaSignOutAlt
          onClick={handleLogOut}
          style={{ width: "30px", height: "30px", marginBottom: "5px" }}
        />
      </Flex>
    </Flex>
  );
};
export default SideBar;
