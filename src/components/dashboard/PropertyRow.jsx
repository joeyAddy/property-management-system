/* eslint-disable react/prop-types */
import { CiLocationOn, CiPen } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";

const PropertyRow = ({ image, price, title, address }) => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap py-8">
        <div className="font-semibold text-gray-600 flex flex-col lg:flex-row gap-4">
          <img src={image} alt="bedroom" className="h-20 w-24" />
          <div className="space-y-2">
            <p className="font-semibold text-[1rem] text-left">{title}</p>
            <div className="space-x-1 w-full flex items-center text-gray-400 my-3">
              <CiLocationOn className="text-md" />
              <p className="font-extralight text-sm">{address}</p>
            </div>
            <p className="text-sm text-left text-gray-400 font-extralight">
              {price}
            </p>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap  px-6 py-4 w-32">14.02.2018</td>
      <td className="whitespace-nowrap  px-6 py-4 w-24">34</td>
      <td className="whitespace-nowrap  px-6 py-4 w-24">
        <div className="text-gray-600 flex flex-row space-x-2">
          <CiPen className="hover:cursor-pointer hover:text-blue-400" />{" "}
          <FaTrashAlt className="hover:cursor-pointer hover:text-blue-400" />
        </div>
      </td>
    </tr>
  );
};

export default PropertyRow;
