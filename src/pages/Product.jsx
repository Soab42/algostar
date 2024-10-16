import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, checkCart } from '../features/silces/cartSlice';
import { Link } from 'react-router-dom';

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p.id == id);
  const isInCart = useSelector((state) => checkCart(state, product.id));
  const dispatch = useDispatch();

  if (!product) return <div>Product not found</div>;
  return (
    <div className="flex flex-col xl:flex-row md:flex-row lg:flex-row justify-center items-center p-4 xl:p-10 gap-10">
      <div className="w-1/2 overflow-hidden flex justify-center ring-1 ring-gray-300 p-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-96 xl:h-full hover:scale-[1.8] transition-all duration-300 "
        />
      </div>

      <div className="description w-1/2 flex flex-col text-xl gap-5">
        <h1 className="text-3xl font-black">{product.title}</h1>
        <p>{product.description}</p>
        <p className="text-2xl font-black">
          Ratings: {product.rating.count} Stars: {product.rating.rate}{' '}
          {Array.from({ length: Math.ceil(product?.rating.rate) }).map(
            (_, i) => (
              <span key={i}>⭐</span>
            ),
          )}
        </p>
        <p className="text-2xl font-bold">Category: {product.category}</p>
        <p className="text-2xl font-bold">Price: ${product.price}</p>
        <div className="grid gap-2">
          <label className=" font-bold text-xl">Quantity:</label>
          <div className="flex gap-2 justify-between w-24">
            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
              type="button"
              disabled={isInCart}
              className="bg-gray-300 p-2  px-6 text-3xl disabled:cursor-not-allowed"
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              disabled={isInCart}
              min="1"
              className="border-2 p-2 px-2 text-center text-2xl w-32 disabled:cursor-not-allowed"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              disabled={isInCart}
              type="button"
              className="bg-gray-300 p-2 px-6 text-xl disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>
        </div>
        {isInCart ? (
          <Link
            to={'/cart'}
            className="bg-red-500 text-center  hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            View in Cart
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => dispatch(addToCart({ ...product, quantity }))}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
