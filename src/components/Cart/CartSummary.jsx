"use client";
import { goToServerUrl } from "@/lib";
import { useCart } from "@/provider/CartProvider";
import redirectHard from "@/utils/redirectHard";
import { FaShoppingCart } from "react-icons/fa";
const CartSummary = ({ dictionary, lang }) => {
  const {
    state: { cart, totalPrice },
  } = useCart();

  if (cart?.length === 0) return null;
  const handleNavigation = async () => {
    await redirectHard(`/${lang}/checkout`);
  };
  return (
    <div className="px-4 py-4 mt-6 bg-white rounded shadow-cardShadow xl:col-span-3 lg:col-span-4 lg:mt-0 lg:w-[20vw]">
      <h4 className="mb-4 text-lg font-medium text-gray-800 uppercase">
        {dictionary?.order_summary}
      </h4>
      <div className="pb-3 space-y-1 text-gray-600 border-b border-gray-200">
        <div className="flex justify-between font-medium">
          <p>{dictionary?.subtotal}</p>
          <p>BDT {totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>{dictionary?.delivery}</p>
          <p>0</p>
        </div>
        <div className="flex justify-between">
          <p>{dictionary?.tax}</p>
          <p>0</p>
        </div>
      </div>
      <div className="flex justify-between my-3 font-semibold text-gray-800 uppercase">
        <h4>{dictionary?.total}</h4>
        <h4>BDT {totalPrice?.toFixed(2)}</h4>
      </div>

      {/* <!-- checkout --> */}
      <button
        className="flex items-center gap-1 p-3 rounded-md btn bg-green-200 hover:bg-green-300"
        onClick={handleNavigation}
      >
        <FaShoppingCart /> {dictionary?.process_to_checkout}
      </button>
      {/* <!-- checkout end --> */}
    </div>
  );
};
export default CartSummary;
