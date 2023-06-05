import { FaChevronUp } from "react-icons/fa";

const GoTop = ({ showGoTop, scrollUp }) => {
  return (
    <>
      <div
        className={`${
          showGoTop === true ? "block" : "hidden"
        } bg-blue-600 text-white text-lg font-medium rounded-md fixed bottom-3 z-50 right-10 p-3 shadow-2xl`}
        onClick={scrollUp}
      >
        <button className="goTop">
          <FaChevronUp />
        </button>
      </div>
    </>
  );
};
export default GoTop;
