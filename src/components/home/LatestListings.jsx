/* eslint-disable no-undef */
import SectionTitle from "./SectionTitle";
import { Carousel } from "react-responsive-carousel";
import ListingCard from "./ListingCard";
import { Listings } from "../../constants/Listings";

const LatestListings = () => {
  return (
    <section className="h-auto mt-10 px-6 md:px-36 pb-10">
      <SectionTitle title="Latest Listings" />
      <h4 className="text-lg text-gray-400 text-center -mt-9 mb-3">
        These are the hottest, sleekest Apartments in town!
      </h4>
      <div className="mt-5 h-auto">
        <Carousel
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  className="shadow-md shadow-blue-900 rounded-full bg-blue-600 border-2 border-blue-600 h-4 w-4 inline-block mx-2"
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              );
            }
            return (
              <li
                className="shadow-md shadow-blue-900 rounded-full bg-white border-2 border-blue-600 h-4 w-4 inline-block"
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          <div className="grid lg:grid-cols-3 gap-8 mb-20 mx-5">
            {Listings.slice(0, 3).map(
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
          <div className="grid lg:grid-cols-3 gap-8 w-full h-auto">
            {Listings.slice(3, 6).map(
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
        </Carousel>
      </div>
    </section>
  );
};

export default LatestListings;
