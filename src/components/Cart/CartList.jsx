"use client";
import { useCart } from "@/provider/CartProvider";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
const CartList = ({ dictionary, lang }) => {
  const {
    state: { cart },
  } = useCart();
  const cartItems = cart;

  if (cartItems.length < 1)
    return <EmptyCart dictionary={dictionary} lang={lang} />;

  return (
    <div className="xl:col-span-9 lg:col-span-8">
      <div className="hidden py-2 pl-12 pr-20 mb-4 bg-gray-200 xl:pr-28 md:flex">
        <p className="text-center text-gray-600">{dictionary?.product}</p>
        <p className="ml-auto mr-16 text-center text-gray-600 xl:mr-24">
          {dictionary?.quantity}
        </p>
        <p className="text-center text-gray-600">{dictionary?.total}</p>
      </div>

      <div className="space-y-4">
        {cartItems?.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
    </div>
  );
};
export default CartList;
