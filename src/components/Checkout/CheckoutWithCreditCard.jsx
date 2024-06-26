import {
  Button,
  Flex,
  Group,
  Image,
  List,
  Paper,
  Stack,
  Text,
  Title,
  Divider,
  Card,
  Radio,
  Fieldset,
  TextInput,
  NumberInput,
} from "@mantine/core";
import { useCart } from "../../hooks/cartContext";
import style from "./Checkout.module.css";
const Checkout = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    incrementItemCount,
    decrementItemCount,
    getTotalItemPrice,
  } = useCart();

  return (
    <Card withBorder maw={500} m="auto" align="center">
      <Title>Checkout</Title>
      <Text>Total: ${getTotalItemPrice().toFixed(2)} </Text>
      {/* TODO some phone number, email, adress, credit card? */}
      <Radio.Group name="paymentMethod" label="Select payment method">
        <Stack mt="xs">
          <Radio value="creditCard" label="Credit Card"></Radio>
          <Radio value="cash" label="Cash"></Radio>
        </Stack>
      </Radio.Group>
      <Fieldset legend="Credit card information" variant="unstyled">
        <Stack>
          <TextInput placeholder="Name on card" />
          <NumberInput type="tel" hideControls placeholder="Card number" />
          <Group>
            <NumberInput
              w="40%"
              className={style.inputFit}
              placeholder="mm/yy"
              type="tel"
              maxlength="7"
            />
            <NumberInput
              w="20%"
              className={style.inputFit}
              placeholder="CVV"
              type="tel"
              maxlength="4"
            />
          </Group>
        </Stack>
      </Fieldset>

      <Button>Confirm order</Button>
    </Card>
  );
};
export default Checkout;
