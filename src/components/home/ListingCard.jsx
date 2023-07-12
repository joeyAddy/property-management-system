import React from "react";
import { CiLocationOn } from "react-icons/ci";

const ListingCard = ({
  image,
  title,
  price,
  address,
  description,
  listClass,
}) => {
  return (
    <div className="col-span-1 h-auto hover:shadow-2xl bg-white">
      <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <a href="#!" className="relative">
          <img class="rounded-t-lg h-56 w-full" src={image} alt="" />
          <button className="bg-green-500 absolute top-10 left-5 rounded-sm py-1 px-3 text-white font-norma;">
            {listClass}
          </button>
        </a>
        <div class="p-6 flex flex-col items-start">
          <h5 class="mb-2 text-xl md:truncate w-full tracking-wider font-bold leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <div className="space-x-2 md:truncate w-full flex items-center text-sm text-gray-400 my-3">
            <CiLocationOn className="font-semibold" />
            <p>{address}</p>
          </div>
          <p class="mb-4 text-3xl dark:text-neutral-200 font-bold text-blue-500 ">
            {price}
          </p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
