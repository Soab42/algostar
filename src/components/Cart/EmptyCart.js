"use client";
import redirectHard from "@/utils/redirectHard";
import Image from "next/image";
import { FaShopify } from "react-icons/fa6";

export default function EmptyCart({ dictionary, lang }) {
  return (
    <div className="flex flex-col justify-center items-center w-full col-start-4 col-span-6">
      <Image
        src="/assets/images/cart.png"
        alt="empty-cart"
        width={500}
        height={500}
      />
      <p className="flex flex-col items-center justify-center text-4xl font-black gap-4">
        {dictionary?.empty_cart}!
        <button
          onClick={async () => {
            await redirectHard(`/${lang}/shop`);
          }}
          className="inline-flex justify-center items-center text-primary hover:text-primary text-2xl"
        >
          <FaShopify /> {dictionary?.visit_shop}
        </button>
      </p>
    </div>
  );
}
