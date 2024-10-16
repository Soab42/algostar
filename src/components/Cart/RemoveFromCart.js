"use client";
import { useCart } from "@/provider/CartProvider";
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import Alert from "../Alert";

export default function RemoveFromCart({ id }) {
  const { removeFromCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteClick = () => {
    setShowAlert(true);
  };
  const handleCancel = () => {
    setShowAlert(false);
  };
  const handleConfirm = () => {
    setShowAlert(false);
    removeFromCart(id);
    // addToWishlist({ ...wish, id: wish.productId }, wish.productId);
  };

  return (
    <>
      <div className="text-lg text-red-400 hover:text-red-600">
        <button onClick={handleDeleteClick}>
          <RiDeleteBin5Line />
        </button>
      </div>
      {showAlert && (
        <Alert
          message="Are you sure you want to delete this item?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}
