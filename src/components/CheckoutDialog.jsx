import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogTrigger,
  DialogContent,
  Button,
  Flex,
} from "@sparrowengg/twigs-react";
import ShippingAddress from "./ShippingAddress";
import OrderSummary from "./OrderSummary";
export const CheckoutDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" css={{ padding: "$10", marginBottom: "$5" }}>
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
                css={{ width: "100%", marginTop: "$2" }}
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
