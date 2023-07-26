import { Listings } from "../../constants/Listings";
import Pagination from "./Pagination";

const FavoriteProperties = () => {
  const itemsPerPage = 5;

  return (
    <div className="space-y-6">
      <div className="p-6 shadow-round">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="overflow-auto">
                <Pagination data={Listings} itemsPerPage={itemsPerPage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProperties;
