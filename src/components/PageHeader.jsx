import { FaChevronRight, FaHome } from "react-icons/fa";

const PageHeader = ({ title }) => {
  return (
    <div
      style={{
        backgroundPosition: "50%",
      }}
      className="flex flex-col items-center justify-center h-60 text-white  space-y-4 bg-no-repeat bg-fixed bg-center bg-cover page__header"
    >
      <h2 className="text-4xl font-extrabold capitalize">{title}</h2>
      <div className="flex space-x-3 items-center">
        <FaHome />
        <span className="flex items-center">
          Home <FaChevronRight className="ml-2" />
        </span>
        <span className="capitalize">{title}</span>
      </div>
    </div>
  );
};

export default PageHeader;
