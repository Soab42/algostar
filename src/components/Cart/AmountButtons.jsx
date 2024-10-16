"use client";
import { useCart } from "@/provider/CartProvider";

const AmountButtons = ({ product, productStock, productId }) => {
  const { state, addToCart, removeFromCart } = useCart();
  const handleIncrement = () => {
    if (product.quantity + 1 <= productStock) {
      addToCart({ ...product, id: productId }, 1);
    }
  };
  const handleDecrement = () => {
    if (product.quantity > 0) {
      if (product.quantity - 1 <= productStock) {
        addToCart({ ...product, id: productId }, -1);
      } else {
        removeFromCart(productId);
      }
    }
  };

  return (
    <div className="flex text-gray-600 border border-gray-300 divide-x divide-gray-300">
      <button
        className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
        onClick={handleDecrement}
        disabled={product.quantity === 0}
      >
        -
      </button>
      <div className="flex items-center justify-center w-10 h-8">
        {product?.quantity}
      </div>
      <button
        className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
        onClick={handleIncrement}
        disabled={product.quantity === productStock}
      >
        +
      </button>
    </div>
  );
};

export default AmountButtons;
