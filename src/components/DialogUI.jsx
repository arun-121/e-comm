import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
  DialogContent,
  Button,
  Text,
  Flex,
} from "@sparrowengg/twigs-react";
import ShippingAddress from "./ShippingAddress";
import OrderSummary from "./OrderSummary";
export const DialogUI = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" css={{ padding: "20px", marginBottom: "10px" }}>
            Click to Proceed
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <ShippingAddress />
          <OrderSummary />

          <Flex>
            <DialogClose asChild>
              <Button
                color="error"
                size="md"
                css={{ width: "100%", marginTop: "5px" }}
              >
                Close
              </Button>
            </DialogClose>
          </Flex>
        </DialogContent>
      </Dialog>
    </>
  );
};
