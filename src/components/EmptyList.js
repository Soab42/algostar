import Image from "next/image";
import React from "react";
import { AiFillWarning } from "react-icons/ai";

export default function EmptyList() {
  return (
    <div className="flex flex-col w-full text-4xl justify-center items-center text-rose-400 gap-3 font-black">
      <Image
        src={"/assets/images/empty.jpg"}
        width={500}
        height={400}
        alt="empty"
      />
      <div className="flex items-center justify-center text-4xl font-black gap-4">
        <AiFillWarning />
        {.no_item_found}
      </div>
    </div>
  );
}
