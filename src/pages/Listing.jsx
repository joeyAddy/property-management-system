import React from "react";
import PageHeader from "../components/PageHeader";
import { Listings } from "../constants/Listings";
import Pagination from "../components/Pagination";

const Listing = () => {
  return (
    <section className="h-auto">
      <PageHeader title="listing" />
      <div className="grid lg:grid-cols-3 my-16 gap-8 mx-10 md:mx-36">
        <div className="col-span-2">
          <div className="flex items-center space-x-5 mb-5">
            <p className="font-base text-gray-400">Sort by:</p>
            <label className="">
              <select className="bg-transparent p-3 rounded-md box-border appearance-none border border-gray-300 inline-block h-[48px] focus:outline-none w-full">
                <option>Default Order</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
                <option>Newest Properties</option>
                <option>Oldest Properties</option>
              </select>
            </label>
            <p className="font-base text-gray-400">42 Homes found</p>
          </div>
          <Pagination itemsPerPage={4} items={Listings} />
        </div>
        <div className="col-span-1">
          <div className="flex items-center h-16">
            <h2 className="uppercase font-medium text-2xl text-gray-600">
              Find your new home
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <label>
                <select className="bg-transparent p-3 rounded-md box-border appearance-none border border-gray-300 inline-block h-[48px] focus:outline-none w-full">
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
            <div>
              <label className="mt-5">
                <select className="bg-transparent p-3 rounded-md box-border appearance-none border border-gray-300 inline-block h-[48px] focus:outline-none w-full">
                  <option>All Actions</option>
                  <option>Rentals (12)</option>
                  <option>Sales (17)</option>
                </select>
              </label>
            </div>
            <div>
              <label className="mt-5">
                <select className="bg-transparent p-3 rounded-md box-border appearance-none border border-gray-300 inline-block h-[48px] focus:outline-none w-full">
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

            <div className="flex flex-col space-y-6 text-lg text-gray-400">
              <div className="flex space-x-3">
                <input id="check-2" type="checkbox" name="check" />
                <label htmlFor="check-2">Air Conditioning</label>
              </div>
              <div className="flex space-x-3">
                <input id="check-3" type="checkbox" name="check" />
                <label htmlFor="check-3">Swimming Pool</label>{" "}
              </div>
              <div className="flex space-x-3">
                <input id="check-4" type="checkbox" name="check" />
                <label htmlFor="check-4">Central Heating</label>
              </div>
              <div className="flex space-x-3">
                <input id="check-5" type="checkbox" name="check" />
                <label htmlFor="check-5">Laundry Room</label>
              </div>
              <div className="flex space-x-3">
                <input id="check-6" type="checkbox" name="check" />
                <label htmlFor="check-6">Gym</label>
              </div>
              <div className="flex space-x-3">
                <input id="check-7" type="checkbox" name="check" />
                <label htmlFor="check-7">Alarm</label>
              </div>
              <div className="flex space-x-3">
                <input id="check-8" type="checkbox" name="check" />
                <label htmlFor="check-8">Window Covering</label>
              </div>
              <button className="bg-blue-400 rounded-md p-3 w-full text-white font-bold">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
