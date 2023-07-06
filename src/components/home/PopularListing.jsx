import React from "react";
import SectionTitle from "./SectionTitle";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Listings } from "../../constants/Listings";
import ListingCard from "./ListingCard";

const PopularListing = () => {
  return (
    <section className="h-auto pt-10 px-6 md:px-36 pb-10 relative bg-slate-50">
      <SectionTitle title="Popular Listings" />
      <h4 className="text-lg text-gray-400 text-center -mt-9 mb-3">
        View popular listing
      </h4>
      <div className="grid lg:grid-cols-3 gap-8">
        {Listings.map(
          (
            { title, price, description, address, listClass, image } = item,
            index
          ) => (
            <div key={index}>
              <ListingCard
                title={title}
                price={price}
                image={image}
                description={description}
                address={address}
                listClass={listClass}
              />
            </div>
          )
        )}
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-blue-500 relative bottom-0 text-white py-3 px-4 my-5 w-36 rounded-md">
          Browse all
        </button>
      </div>
    </section>
  );
};

export default PopularListing;
