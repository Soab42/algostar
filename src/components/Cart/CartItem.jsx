import Image from "next/image";
import AmountButtons from "./AmountButtons";
import RemoveFromCart from "./RemoveFromCart";
import { getProduct } from "@/lib";
import { useEffect, useState } from "react";

const CartItem = async ({ item = {} }) => {
  const [stock, setStock] = useState(0);
  const { title, price, quantity, thumbnail, productId, available } = item;
  useEffect(() => {
    async function getStock() {
      if (productId) {
        try {
          const stockAmount = await getProduct(productId);
          setStock(stockAmount?.stock);
        } catch (error) {
          console.log("Error getting stock:", error);
        }
      }
    }
    getStock();
  }, [productId]);
  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded md:justify-between md:gap-6 md:flex-nowrap shadow-cardShadow">
      <div className="flex-shrink-0 w-32">
        <Image
          width={500}
          height={500}
          src={thumbnail}
          className="h-[80px]"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/3">
        <h2 className="mb-3 font-medium xl:text-xl textl-lg">{title}</h2>
        <p className="font-semibold">
          BDT {price} x {quantity}
        </p>
        <sup>{available ? "" : "time out"}</sup>
      </div>
      <AmountButtons
        product={item}
        productStock={stock}
        productId={productId}
      />
      <div className="ml-auto md:ml-0">
        <p className="text-lg font-semibold">
          BDT {(quantity * price)?.toFixed(2)}
        </p>
      </div>
      <RemoveFromCart id={productId} />
    </div>
  );
};
export default CartItem;
