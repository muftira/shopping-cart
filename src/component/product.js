import React from "react";
import { Data } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className=" lg:w-[900px] sm:w-[550px] w-[300px] flex flex-row items-center justify-between mb-5">
        <h1 className="font-bold lg:text-5xl sm:text-4xl">Product</h1>
        <button
          className="sm:h-12 sm:w-48 h-6 w-32 bg-button sm:rounded-xl rounded-md font-bold text-white sm:text-base text-xs"
          onClick={() => navigate("cart")}
        >
          Go to Shopping Cart
        </button>
      </div>
      <div className="lg:h-[700px] lg:w-[900px] sm:h-[600px] sm:w-[550px] h-[300px] w-[300px]  bg-white rounded-3xl shadow-2xl border-2 border-neutral-200">
        {Data.map((items) => {
          items.quantity = 1;
          return (
            <div className="h-1/2 w-full  flex flex-row justify-center items-center px-5">
              <div className="w-[20%] flex justify-center items-center">
                <div className="lg:h-[250px] lg:w-[200px] sm:h-[150px] sm:w-[100px] h-[75px] w-[100px] bg-white rounded-2xl overflow-hidden">
                  <img
                    className="object-cover overflow-hidden"
                    src={items.image}
                    alt=""
                  />
                </div>
              </div>

              <div className="w-[60%] lg:h-[250px] sm:h-[150px] h-[100px] flex flex-col justify-between items-start ml-6">
                <p className="font-bold lg:text-3xl sm:text-xl text-base">
                  {items.name}
                </p>
                <p className="sm:text-base text-xs">{items.type}</p>
                <p className="sm:text-base text-xs">COLOR - Blue</p>
                <p className="sm:text-base text-xs">SIZE - {items.size}</p>
                <p className="sm:text-base text-xs ">${items.price}</p>
              </div>
              <div className="w-[20%] sm:h-[200px] flex justify-center items-center">
                <button
                  className="sm:h-12 sm:w-28 h-8 w-18 sm:text-base text-xs bg-button sm:rounded-xl rounded-md font-bold text-white"
                  onClick={() => dispatch({ type: "ADD", payload: items })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
