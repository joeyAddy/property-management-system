import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const PriceCard = ({ title }) => {
  return (
    <div
      className={`${
        title === "business" ? "md:scale-105" : "hover:scale-105"
      } col-span-1 space-y-3 shadow-md flex flex-col items-center h-fit `}
    >
      <div className="bg-blue-600 font-bold text-2xl w-full h-24 flex items-center ">
        <p className="mx-auto text-white capitalize">{title}</p>
      </div>
      <div className="font-bold w-full flex flex-col py-6 space-y-3 items-center border-b-2 ">
        <p className="mx-auto text-gray-800 text-4xl">$99</p>
        <p className="mx-auto text-gray-600 text-md uppercase">
          No discouunt om renewal
        </p>
      </div>
      <div
        className={`price__card__bg p-0 ${
          title === "business"
            ? ""
            : "not__business bg-opacity-10 bg-cover bg-no-repeat hover:bg-none"
        }`}
      >
        <div className="w-4/5 flex flex-col py-6 mx-10 text-center space-y-3 items-center border-b-2 ">
          <p className="mx-auto text-gray-800 text-lg font-bold inline-flex items-center">
            <FaCheckSquare className="text-blue-600 mr-2" /> Ad Visibility: 3
            Months{" "}
          </p>
          <p className="mx-auto text-gray-600 text-md">
            Months Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-4/5 flex flex-col py-6 mx-10 text-center space-y-3 items-center border-b-2 ">
          <p className="mx-auto text-gray-800 text-lg font-bold inline-flex items-center">
            <FaCheckSquare className="text-blue-600 mr-2" /> Number of Ads: 15
          </p>
          <p className="mx-auto text-gray-600 text-md">
            Months Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-4/5 flex flex-col py-6 mx-10 text-center space-y-3 items-center border-b-2">
          <p className="mx-auto text-gray-800 text-lg font-bold inline-flex items-centerflex items-center">
            <FaCheckSquare className="text-blue-600 mr-2" /> Featured Ads: 5
          </p>
          <p className="mx-auto text-gray-600 text-md">
            Months Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-4/5 flex flex-col py-6 mx-10 text-center space-y-3 items-center pb-12">
          <button className="text-white text-sm font-bold px-6 py-5 bg-blue-600 rounded-md uppercase">
            Get started now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
