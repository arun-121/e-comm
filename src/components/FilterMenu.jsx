import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Flex,
  Text,
  Checkbox,
  RadioGroup,
  Radio,
} from "@sparrowengg/twigs-react";
import {
  setCategoryFilter,
  setPriceFilter,
  setSortedFilter,
} from "../redux/actions";
import { useDispatch } from "react-redux";
const FilterMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Flex
        css={{ background: "#ffffff", width: "30%" }}
        flexDirection="column"
        justifyContent="center"
      >
        <Flex flexDirection="column">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Categories</AccordionTrigger>
              <AccordionContent>
                <Flex flexDirection="column" gap="$5">
                  <Checkbox
                    id="men's clothing"
                    size="md"
                    onChange={() =>
                      dispatch(setCategoryFilter("men's clothing"))
                    }
                  >
                    <Text>men's clothing</Text>
                  </Checkbox>
                  <Checkbox
                    onChange={() =>
                      dispatch(setCategoryFilter("women's clothing"))
                    }
                    id="women's clothing"
                    size="md"
                  >
                    <Text>women's clothing</Text>
                  </Checkbox>
                  <Checkbox
                    onChange={(e) => dispatch(setCategoryFilter("jewelery"))}
                    id="jewelery"
                    size="md"
                  >
                    <Text>jewelery</Text>
                  </Checkbox>
                  <Checkbox
                    onChange={(e) => dispatch(setCategoryFilter("electronics"))}
                    id="electronics"
                    size="md"
                  >
                    <Text>electronics</Text>
                  </Checkbox>
                </Flex>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Price</AccordionTrigger>
              <AccordionContent>
                <Flex flexDirection="column" gap="$5">
                  <Checkbox
                    id="100rs"
                    size="md"
                    onChange={(e) => dispatch(setPriceFilter(100))}
                  >
                    <Text>under 100</Text>
                  </Checkbox>
                  <Checkbox
                    onChange={(e) => dispatch(setPriceFilter(200))}
                    id="200rs"
                    size="md"
                  >
                    <Text>under 200</Text>
                  </Checkbox>
                  <Checkbox
                    onChange={(e) => dispatch(setPriceFilter(300))}
                    id="300rs"
                    size="md"
                  >
                    <Text>under 300</Text>
                  </Checkbox>
                  <Checkbox
                    onChange={(e) => dispatch(setPriceFilter(500))}
                    id="500rs"
                    size="md"
                  >
                    <Text>under 500</Text>
                  </Checkbox>
                </Flex>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Sort</AccordionTrigger>
              <AccordionContent>
                <Flex flexDirection="column" gap="$5">
                  <RadioGroup onChange={(e) => dispatch(setSortedFilter(e))}>
                    <Radio value="ascending">
                      <Text>low to high</Text>
                    </Radio>
                    <Radio value="descending">
                      {" "}
                      <Text>high to low</Text>{" "}
                    </Radio>
                  </RadioGroup>
                </Flex>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </>
  );
};

export default FilterMenu;

/*

price -low to high ,high to low
under 500, under 1000

*/
