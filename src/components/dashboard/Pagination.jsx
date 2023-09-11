/* eslint-disable react/prop-types */
import { useState } from "react";
import PropertyRow from "./PropertyRow";
import { useRef } from "react";

const Table = ({ data, itemsPerPage, refetch }) => {
  const [currentPage, setCurrentPage] = useState(1);

  console.log(data, "from row");

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the current page's data based on itemsPerPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // item ref
  const itemRef = useRef(null);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    itemRef?.current.scrollIntoView({ behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  // Check if there is a previous or next page
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div>
      <table className="min-w-full table-auto text-center text-sm font-light">
        {/* Table header */}
        <thead
          ref={itemRef}
          className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800"
        >
          <tr>
            <th scope="col" className="px-6 py-4 text-left">
              Property
            </th>
            <th>Date Added</th>
            <th>Views</th>
            <th>Actions</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {currentData.map((item, index) => (
            <PropertyRow
              key={index}
              title={item.title}
              price={item.price}
              address={item.address}
              id={item._id}
              favorite={item?.favorite}
              date={String(item.createdAt).split("T")[0]}
              image={item.images[0]}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-2 py-1 mr-2 border rounded ${
            !hasPreviousPage
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-400 text-white"
          }`}
          disabled={!hasPreviousPage}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-2 py-1 mr-2 border rounded ${
                pageNumber === currentPage
                  ? "bg-blue-400 text-white"
                  : "bg-white text-blue-400"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-2 py-1 mr-2 border rounded ${
            !hasNextPage
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-400 text-white"
          }`}
          disabled={!hasNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
