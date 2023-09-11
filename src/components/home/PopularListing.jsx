/* eslint-disable no-undef */
import SectionTitle from "./SectionTitle";
import ListingCard from "./ListingCard";
import { useState } from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { server } from "../../constants/server";
import { notify } from "../Notify";
import { useEffect } from "react";

const PopularListing = () => {
  const [properties, setProperties] = useState(null);

  const { data, loading, error } = useAxiosFetch(`${server}property`);

  useEffect(() => {
    if (error) {
      if (error?.response?.status === 500) {
        notify(error.response.data?.error, "error");
      }
      notify(error.response?.data?.errorMessage, "error");

      console.log(error.response.status, "error");
    }
    if (data) {
      // notify("Profile update successful.", "success");

      setProperties(data.data);
      console.log(data.data, "data");
    }
  }, [data, error]);

  return (
    <section className="h-auto pt-10 px-6 md:px-36 pb-10 relative bg-slate-50">
      <SectionTitle title="Popular Listings" />
      <h4 className="text-lg text-gray-400 text-center -mt-9 mb-3">
        View popular listing
      </h4>
      <div className="grid lg:grid-cols-3 gap-8">
        {loading ? (
          <p className="font-bold text-center my-5">Fetching properties...</p>
        ) : properties !== null ? (
          properties.map(
            (
              {
                title,
                price,
                description,
                address,
                status,
                images,
                _id,
              } = item,
              index
            ) => (
              <div key={index}>
                <ListingCard
                  title={title}
                  price={price}
                  image={images[0]}
                  description={description}
                  address={address}
                  status={status}
                  id={_id}
                />
              </div>
            )
          )
        ) : (
          <p className="font-bold text-center my-5">No properties found.</p>
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
