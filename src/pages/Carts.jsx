import {
  AiFillCheckSquare,
  AiFillDelete,
  AiFillShopping,
  AiOutlineShopping,
} from 'react-icons/ai';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  addToCart,
  clearCart,
  removeFromCart,
  selectCart,
  selectTotal,
} from '../features/silces/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage({ setOpen }) {
  const pathName = useLocation().pathname;
  const cartData = useSelector(selectCart);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const isInCartPage = pathName === '/cart';

  if (cartData.length == 0) {
    return (
      <div
        style={{
          width: isInCartPage ? '79%' : '',
          marginTop: isInCartPage ? '4%' : '',
        }}
        className="bg-white   text-black overflow-x-auto  p-4 h-[92vh] xl:w-[35vw] md:w-[50vw] w-[100vw] fixed top-0"
      >
        <h1 className="text-2xl text-center mt-[20vh]">
          You don't have any items in your cart
        </h1>
        <div className="flex justify-center items-center mt-10">
          {isInCartPage ? (
            <Link
              to="/"
              className="bg-green-500 px-3 py-2 flex gap-2 items-center"
            >
              <AiFillShopping />
              Continue shopping
            </Link>
          ) : (
            <button
              className="bg-green-500 px-3 py-2 flex gap-2 items-center capitalize"
              onClick={() => setOpen(false)}
            >
              <AiFillShopping />
              Continue shopping
            </button>
          )}
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        width: isInCartPage ? '79%' : '',
        marginTop: isInCartPage ? '4%' : '',
      }}
      className="bg-white  text-black overflow-x-auto  p-4 h-[92vh] xl:w-[35vw] md:w-[50vw] w-[100vw] fixed top-0"
    >
      <div className="text-3xl mb-4 text-center bg-green-400 p-2 flex items-center">
        <button
          onClick={() => setOpen(false)}
          className="flex-left p-2 px-4 text-3xl hover:translate-x-2 hover:font-black hover:text-shadow hover:bg-slate-100/40  text-black transition-all duration-300"
        >
          <FaArrowRightLong />
        </button>
        <p className="mx-auto flex justify-center items-center gap-2">
          <AiOutlineShopping />
          Cart List
        </p>
      </div>
      <div className="items ">
        <table className="table text-lg *:border *:border-gray-300">
          <thead>
            <tr className="*:p-2 *:border bg-gray-300  text-black">
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartData?.map((item, index) => (
              <tr key={item.id} className="*:px-2 *:border">
                <td>{index + 1}</td>
                <td className="min-w-fit">{item.title}</td>
                <td>{item.price}</td>
                <td className="font-black py-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="bg-gray-300 p-2 px-4 text-xl"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      -
                    </button>
                    <span className="text-center px-3 font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      className="bg-gray-300 p-2 px-4 text-xl"
                      onClick={() =>
                        dispatch(addToCart({ ...item, quantity: 1 }))
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => dispatch(clearCart(item))}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}

            <tr className="bg-gray-300 font-black text-black">
              <td></td>
              <td></td>
              <td></td>
              <td className="text-center ">Total</td>
              <td className="border">{total}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="flex gap-4 mt-4 justify-center text-white text-lg ">
          <button
            className="bg-red-500 px-3 py-2 flex gap-2 items-center capitalize"
            onClick={() => alert('Your order has been placed. Thank You! ❤️ ')}
          >
            <AiFillCheckSquare />
            Proceed to checkout
          </button>
          {isInCartPage ? (
            <Link
              to="/"
              className="bg-green-500 px-3 py-2 flex gap-2 items-center"
            >
              <AiFillShopping />
              Continue shopping
            </Link>
          ) : (
            <button
              className="bg-green-500 px-3 py-2 flex gap-2 items-center capitalize"
              onClick={() => setOpen(false)}
            >
              <AiFillShopping />
              Continue shopping
            </button>
          )}
        </div>
      </div>
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
      `}</style>
    </div>
  );
}
