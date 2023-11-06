/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import { CheckIcon, ClockIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { createDollarString } from "../../utility";
import { Link } from "react-router-dom";
import { removeFromCart } from "../reducers/cart";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemsInCart);
  const [chaChing, setChaChing] = useState(null);

  let subTotalCount = 0;
  cartItems.forEach((item) => {
    subTotalCount += item.priceInCents;
  });

  useEffect(() => {
    setChaChing(
      new Audio(
        "https://nftstorage.link/ipfs/bafybeibn2yeyrwm2viv4u2kwmidchf5srwdq32apnqkoljqwdj7yfjj5fa/chaChing.mp3"
      )
    );
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul>
              {cartItems.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a
                            href={product.href}
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {product.name}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">
                          {createDollarString(product.priceInCents / 100)}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                      {/* <p className="mt-1 text-sm text-gray-500">
                        {product.sizes}
                      </p> */}
                    </div>

                    <div className="mt-4 flex-1 flex items-end justify-between">
                      <p className="flex items-center text-sm text-gray-700 space-x-2">
                        {product.inStock ? (
                          <CheckIcon
                            className="flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ClockIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-300"
                            aria-hidden="true"
                          />
                        )}

                        <span>
                          {product.inStock
                            ? "In stock"
                            : `Will ship in ${product.leadTime}`}
                        </span>
                      </p>
                      <div className="ml-4">
                        <button
                          type="button"
                          onClick={(evt) => {
                            evt.preventDefault();
                            dispatch(removeFromCart({ product }));
                          }}
                          className="text-sm font-medium text-gray-600 hover:text-gray-500"
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Subtotal
                  </dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">
                    {createDollarString(subTotalCount / 100)}
                  </dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">
                Shipping and taxes will be calculated at checkout.
              </p>
            </div>

            <div className="mt-10">
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  chaChing.play();

                  alert(`cha-Ching 🛍️🛍️🛍️`);
                }}
                type="submit"
                className="w-full bg-gray-900 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-sm text-center">
              <p>
                or{" "}
                <Link
                  to="/ "
                  className="text-gray-600 cursor-pointer font-medium hover:text-gray-500"
                >
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
