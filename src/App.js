import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  setTotalAmount,
  setCategoryFilter,
  setPriceFilter,
  setSortedFilter,
  setTheme,
} from "./redux/actions";
import { Flex, Select, Text, Button, toast } from "@sparrowengg/twigs-react";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Text css={{ backgroundColor: "$primary" }}>this is a sample text</Text>
    </>
  );
}

export default App;
