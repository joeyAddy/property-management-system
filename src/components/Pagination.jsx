import { useState } from "react";
import ReactPaginate from "react-paginate";
import ListingCard from "./home/ListingCard";

const Pagination = ({ itemsPerPage, items, listRef }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    listRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-8">
        {items
          .slice(itemOffset, endOffset)
          .map(
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
      <ReactPaginate
        className="flex space-x-5 justify-center my-5 bg-blue-400 p-3 text-white pagination__button"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
