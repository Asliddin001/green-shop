import {
  Description,
  Products,
} from "../../../components/pages/shop-components";
import { Cart } from "../cart";

export const Shop = () => {
  return (
    <>
      <Cart />
      <Description />
      <Products />
    </>
  );
};
