import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  const [status, setStatus] = useState(false);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="font-bold lg:text-5xl sm:text-4xl text-2xl sm:mb-10 mb-4">
        Shopping Cart
      </h1>
      <div className="sm:flex flex-row sm:space-x-4">
        <div>
          <div className="lg:h-[700px] lg:w-[700px] sm:h-[500px] sm:w-[500px] h-[300px] w-[300px] bg-white rounded-3xl shadow-2xl border-2 border-neutral-200">
            {cart.map((items) => (
              <div className="h-1/2 w-full  flex flex-row justify-center items-center px-4">
                <div className="w-[25%] flex justify-center items-center">
                  <div className="lg:h-[200px] lg:w-[150px] bg-white rounded-2xl overflow-hidden">
                    <img className="object-cover" src={items.image} alt="" />
                  </div>
                </div>
                <div className="w-[60%] lg:h-[200px] sm:h-[150px]  flex flex-col justify-between items-start ml-6">
                  <p className="font-bold md:text-3xl sm:text-2xl">
                    {items.name}
                  </p>
                  <p className="lg:text-base sm:text-xs text-[10px]">
                    {items.type}
                  </p>
                  <p className="lg:text-base sm:text-xs text-[10px]">
                    COLOR - {items.color}
                  </p>
                  <p className="lg:text-base sm:text-xs text-[10px]">
                    SIZE - {items.size}
                  </p>
                  <div className="flex space-x-10">
                    <p
                      className="flex items-center lg:text-base sm:text-xs text-[10px]"
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: items })
                      }
                    >
                      <BsFillTrashFill /> REMOVE
                    </p>
                    <p className="flex items-center lg:text-base sm:text-xs text-[10px]">
                      {" "}
                      <AiFillHeart /> WISH LIST
                    </p>
                  </div>
                </div>
                <div className="w-[15%] lg:h-[200px] flex flex-col justify-between items-center  ">
                  <div className="flex justify-center items-center lg:w-28 lg:h-10 sm:w-16 sm:h-6">
                    <button
                      className="w-1/3 h-full border-2 border-neutral-200 lg:text-base text-xs"
                      onClick={() =>
                        items.quantity > 1
                          ? dispatch({ type: "DECREASE", payload: items })
                          : dispatch({ type: "REMOVE", payload: items })
                      }
                    >
                      -
                    </button>
                    <p className="w-1/3 lg:text-base text-xs">
                      {items.quantity}
                    </p>
                    <button
                      className="w-1/3 h-full border-2 border-neutral-200 lg:text-base text-xs"
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: items })
                      }
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className="lg:text-base text-xs">
                      {" "}
                      Harga : ${items.price * items.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:h-[350px] lg:w-[250px] sm:h-[250px] sm:w-[150px] w-[300px] border-2 border-neutral-200 rounded-3xl flex flex-col justify-between p-4 bg-white shadow-2xl">
          <div className="flex  items-center border-b-2 font-bold lg:text-xl text-xs">
            <p>The Total Amount of</p>
          </div>
          <div className="flex justify-between items-center lg:text-base text-xs">
            <p>Temporary Amount</p>
            <p>${total}</p>
          </div>
          <div className="flex justify-between items-center border-b-2 lg:text-base text-xs">
            <p>Shipping</p>
            <p>Gratis</p>
          </div>
          <div className="flex justify-between items-center font-bold lg:text-base text-xs">
            <div>
              <p>The Total Amount of</p>
              <p>(Including VAT)</p>
            </div>
            <p>${total}</p>
          </div>
          <div className="flex justify-center items-center lg:text-base text-xs">
            <button
              className="lg:h-12 lg:w-96 sm:h-6 sm:w-48 h-8 w-[260px] bg-button lg:rounded-xl sm:rounded-md rounded-lg text-white"
              onClick={() => (cart.length ? navigate("/checkout") : null)}
            >
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
