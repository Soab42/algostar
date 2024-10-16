import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, checkCart } from '../features/silces/cartSlice';
import { useSelector } from 'react-redux';
import { FaCartShopping, FaInfo } from 'react-icons/fa6';
import { FaInfoCircle } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Card({ product }) {
  const dispatch = useDispatch();
  const isInCart = useSelector((state) => checkCart(state, product.id));
  return (
    <main role="main">
      <div className="product">
        <figure className="product-image-container">
          <img
            src={product.image}
            alt="Product Image"
            className="product-image"
          />
        </figure>

        <div className="product-description">
          <div className="info">
            <h1 className="line-clamp-3">{product.title}</h1>
            <p className="line-clamp-3">{product.description}</p>
          </div>
          <div className="price text-[tomato]">
            {product.price}
            <span className="text-xs">$</span>
          </div>
        </div>

        <div className="product-bottom">
          {isInCart ? (
            <button className="bg-rose-500 text-white hover:bg-rose-700 text-white font-bold py-2 px-4 rounded">
              <AiFillEye /> <Link to={`/cart`}>View In Cart</Link>
            </button>
          ) : (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-green-500 text-white hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              <FaCartShopping /> <span>ADD TO CART</span>
            </button>
          )}

          <button className="bg-sky-500 text-white hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
            <FaInfoCircle />
            <Link to={`/products/${product.id}`}>MORE INFO</Link>
          </button>
        </div>
      </div>
      <style jsx>{`
        .product {
          border: 1px solid #ddd;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          border-radius: 3px;
          padding: 10px;
          border-radius: 3px;
          box-shadow: 10px 10px 10px rgba(0, 0, 100, 0.1);
          margin-bottom: 20px;
          transition: all 0.5s ease-in-out;
          overflow: hidden;
          position: relative;
          animation: reveal 0.8s ease forwards; /* Run animation */
        }

        .product-image {
          width: 200px;
          height: 200px;
        }
        .product-description {
          display: flex;
          padding: 20px;
          height: 200px;
          transition: all 0.5s ease-in-out;
        }
        .product-description h1 {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .product-description p {
          font-size: 0.8rem;
        }
        .product-description .price {
          rotate: -90deg;
          font-size: 1.7rem;
          font-weight: bold;
          padding: 10px;
          height: 30%;
          position: relative;
          top: 1.5rem;
          left: 1rem;
        }
        .product-bottom {
          display: flex;
          gap: 10px;
          justify-content: space-between;
          position: absolute;
          bottom: 5%;
          background-color: #fff;
        }
        .product-bottom button {
          padding: 10px;
          border-radius: 3px;
          border: 1px solid #ddd;
          display: flex; /* Initially hidden */
          opacity: 0;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          transition: all 0.5s ease;
        }
        .product-bottom button:nth-child(1) {
          transform: translateX(-180px);
        }
        .product-bottom button:nth-child(2) {
          transform: translateX(180px);
        }
        .product:hover {
          box-shadow: 0 15px 20px rgba(0, 0, 100, 0.8);
          transform: translateY(-10px) translateX(10px);
        }
        .product:hover .product-bottom button {
          opacity: 1;
          height: auto;
          transition: all 0.5s ease;
        }

        .product:hover .product-bottom button:nth-child(1) {
          transform: translateX(0);
        }
        .product:hover .product-bottom button:nth-child(2) {
          transform: translateX(0);
        }
        // revel card animation
        @keyframes reveal {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* <style jsx>{`
        main[role='main']:after,
        .product .product-description:after {
          content: '';
          display: table;
          clear: both;
        }
        *,
        *::after,
        *::before {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          -o-box-sizing: border-box;
          box-sizing: border-box;
        }
        p {
          margin: 0 0 30px;
        }
        a {
          text-decoration: none;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 300;
          color: #31353d;
          margin: 0;
        }
        ul {
          padding: 0;
          list-style: none;
        }
        abbr {
          cursor: help;
        }

        .product-image-container {
          padding: 10px;
          background: white;
        }
        .product-image {
          width: 200px;
          height: 200px;
          margin: 0 auto 20px;
        }
        figure {
          margin: 0;
          line-height: 0;
        }
        main[role='main'] {
          max-width: 500px;
          margin: 20px auto;
          position: relative;
        }
        .product {
          color: #aaa;
          font-size: 14px;
          font-family:
            'MavenProRegular',
            arial,
            tahoma,
            trebuchet ms,
            verdana;
          background: #fff;
          max-width: 330px;
          position: relative;
          z-index: 15;
          margin: 0 auto;
          -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
          -moz-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
          -o-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
        }
        .product .product-description {
          position: relative;
          z-index: 15;
          background: #fff;
        }
        .product .product-description .info {
          padding: 15px;
          color: #aaa;
          font-size: 0.85em;
          width: 75%;
          float: left;
        }
        .product .product-description .info h1 {
          font-size: 18px;
          margin: 0 0 5px;
        }
        .product .product-description .info p {
          margin-bottom: 15px;
          line-height: 1.3em;
        }
        .product .product-description .price {
          width: 25%;
          rotate: -90deg;
          float: left;
          color: #9bb6aa;
          font-size: 3.5em;
          position: relative;
          margin-top: 55px;
        }
        .product .product-description .price::before {
          content: '$';
          position: absolute;
          top: 0;
          left: -10px;
          font-size: 0.35em;
        }
        .product .product-sidebar {
          height: 100%;
          background: #31353d;
          width: 50px;
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: end;
          top: 0;
          right: 0;
          z-index: -1;
          -webkit-transition: right 0.3s ease;
          -moz-transition: right 0.3s ease;
          -o-transition: right 0.3s ease;
          transition: right 0.3s ease;
          -webkit-border-radius: 0 2px 2px 0;
          -moz-border-radius: 0 2px 2px 0;
          -o-border-radius: 0 2px 2px 0;
          border-radius: 0 2px 2px 0;
        }
        .product .product-sidebar button {
          border: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          color: #fff;
          padding: 0.9em;
          font-size: 0.8em;
          width: 50px;
          height: 50px;
          overflow: hidden;
          -webkit-transition: all 0.4s ease;
          -moz-transition: all 0.4s ease;
          -o-transition: all 0.4s ease;
          transition: all 0.4s ease;
        }
        .product .product-sidebar button.buy {
          background: transparent
            url('https://raw.githubusercontent.com/brunodsgn/productpreview/master/assets/img/icons/buy.png')
            no-repeat 15px;
        }
        .product .product-sidebar button.info {
          background: transparent
            url('https://raw.githubusercontent.com/brunodsgn/productpreview/master/assets/img/icons/info.png')
            no-repeat 15px;
        }
        .product .product-sidebar button.size {
          background: transparent
            url('https://raw.githubusercontent.com/brunodsgn/productpreview/master/assets/img/icons/sizes.png')
            no-repeat 15px;
        }
        .product .product-sidebar button.colors {
          background: transparent
            url('https://raw.githubusercontent.com/brunodsgn/productpreview/master/assets/img/icons/colors.png')
            no-repeat 15px;
        }
        .product .product-sidebar button.colors span {
          margin-left: 40px;
        }
        .product .product-sidebar button.colors:hover {
          width: 130px;
        }
        .product .product-sidebar button.colors .color {
          padding: 10px;
          display: inline-block;
          vertical-align: middle;
          margin: 0;
          -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))';
          filter: alpha(opacity=70);
          -moz-opacity: 0.7;
          -khtml-opacity: 0.7;
          opacity: 0.7;
          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        .product .product-sidebar button.colors .color.black {
          background: #000;
          border-bottom: 2px solid #555;
        }
        .product .product-sidebar button.colors .color.white {
          background: #fff;
          border-bottom: 2px solid #e5e5e5;
        }
        .product .product-sidebar button.colors .color.red {
          background: #ea1535;
          border-bottom: 2px solid #ef566d;
        }
        .product .product-sidebar button.colors .color:hover {
          -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))';
          filter: alpha(opacity=100);
          -moz-opacity: 1;
          -khtml-opacity: 1;
          opacity: 1;
          -webkit-transform: scale(1.1);
          -moz-transform: scale(1.1);
          -o-transform: scale(1.1);
          transform: scale(1.1);
        }
        .product .product-sidebar button span {
          -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))';
          filter: alpha(opacity=0);
          -moz-opacity: 0;
          -khtml-opacity: 0;
          opacity: 0;
          white-space: nowrap;
          margin-left: 30px;
        }
        .product .product-sidebar button:hover {
          width: 130px;
          background-color: #9bb6aa;
          position: relative;
          background-position: 15px center;
          border-color: #9bb6aa;
        }
        .product .product-sidebar button:hover span {
          -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))';
          filter: alpha(opacity=100);
          -moz-opacity: 1;
          -khtml-opacity: 1;
          opacity: 1;
        }
        .product-sidebar:hover {
          z-index: 1000;
        }

        .product:hover .product-sidebar {
          right: -50px;
        }
        @media screen and (max-width: 480px) {
          #content {
            margin-top: 60px;
          }
          .product .product-sidebar {
            width: 100%;
            height: 50px;
            bottom: 0px;
            left: 0;
            top: inherit;
            -webkit-border-radius: 0 0px 2px 2px;
            -moz-border-radius: 0 0px 2px 2px;
            -o-border-radius: 0 0px 2px 2px;
            border-radius: 0 0px 2px 2px;
            -webkit-transition: bottom 0.3s ease;
            -moz-transition: bottom 0.3s ease;
            -o-transition: bottom 0.3s ease;
            transition: bottom 0.3s ease;
          }
          .product:hover .product-sidebar {
            bottom: -50px;
          }
        }
        @media screen and (max-width: 360px) {
          .product .product-sidebar {
            bottom: -50px;
          }
        }
      `}</style> */}
    </main>
  );
}
