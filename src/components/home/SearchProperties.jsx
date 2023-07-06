import React from "react";
import SectionTitle from "./SectionTitle";
import { BiPlus } from "react-icons/bi";

const SearchProperties = () => {
  return (
    <section className="h-auto mt-10 md:mx-36 pb-10">
      <SectionTitle title="Search Properties" />
      <div className="w-full md:shadow-xl rounded-md p-6 md:p-16">
        <div className="grid lg:grid-cols-4 gap-8 ">
          <div className="col-span-1 ">
            <label className="w-full">
              <select class="bg-transparent p-3 rounded-md box-border appearance-none border border-gray-300 inline-block h-[48px] focus:outline-none w-full">
                <option>All Types</option>
                <option>Apartments (3)</option>
                <option>Houses (2)</option>
                <option>Condos (1)</option>
                <option>Industrial (2)</option>
                <option>Land (3)</option>
                <option>Offices (1)</option>
                <option>Retail (2)</option>
                <option>Villas (1)</option>
              </select>
            </label>
          </div>
          <div className="col-span-1">
            <label>
              <select class="bg-transparent p-3 rounded-md box-border appearance-none border border-gray-300 inline-block h-[48px] focus:outline-none w-full">
                <option>All Actions</option>
                <option>Rentals (12)</option>
                <option>Sales (17)</option>
              </select>
            </label>
          </div>
          <div className="col-span-1">
            <label>
              <select class="bg-transparent p-3 rounded-md box-border appearance-none border border-gray-300 inline-block h-[48px] focus:outline-none w-full">
                <option>All Cities</option>
                <option>Birmingham</option>
                <option>New York</option>
                <option>California</option>
                <option>Washington</option>
                <option>Chicago</option>
                <option>Phoenix</option>
              </select>
            </label>
          </div>
          <div className="col-span-1">
            <button className="bg-blue-400 rounded-md p-3 w-full text-white font-bold">
              Search
            </button>
          </div>
        </div>
        {/* <div className="grid lg:grid-cols-4 gap-8 p-16">

        </div> */}
        <button className="text-blue-400 flex items-center font-semibold space-x-2 mt-5">
          <BiPlus />
          <span>MORE OPTION</span>
        </button>
      </div>
    </section>
  );
};

export default SearchProperties;
