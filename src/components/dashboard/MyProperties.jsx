/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { notify } from "../Notify";
import { server } from "../../constants/server";

const MyProperties = ({ user }) => {
  const itemsPerPage = 5;

  const [properties, setProperties] = useState(null);

  const { data, loading, error, refetch } = useAxiosFetch(
    `${server}property/agent?id=${user._id}`
  );

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
    <div className="space-y-6">
      <div className="p-6 shadow-round">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="overflow-auto">
                {loading === true ? (
                  <p className="font-bold text-center my-5">
                    Fetching properties...
                  </p>
                ) : properties !== null ? (
                  <Pagination
                    data={properties}
                    itemsPerPage={itemsPerPage}
                    refetch={refetch}
                  />
                ) : (
                  <p className="font-bold text-center my-5">
                    No properties found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProperties;
