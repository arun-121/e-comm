import { Flex, Popover, Text, Button, dialogs } from "@sparrowengg/twigs-react";
import { ShoppingCart, House, LogOut, PanelTopDashed } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {};
  return (
    <>
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
            alt=""
          />
        </Flex>
        <Flex flexDirection="column" css={{ gap: "40px" }}>
          <Flex>
            <IoHome
              onClick={() => navigate("/home")}
              className="icon-hover"
              style={{ width: "30px", height: "30px" }}
            />
          </Flex>
          <Flex>
            <FaShoppingCart
              onClick={() => navigate("/cart")}
              className="icon-hover"
              style={{ width: "30px", height: "30px" }}
            />
          </Flex>
        </Flex>
        <Flex>
          <FaSignOutAlt
            className="icon-hover"
            onClick={handleLogOut}
            style={{ width: "30px", height: "30px", marginBottom: "10px" }}
          />
          {/* <LogOut className="icon-hover" /> */}
        </Flex>
      </Flex>
    </>
  );
};
export default SideBar;
