/* eslint-disable react/prop-types */
import { FaEye, FaTrashAlt } from "react-icons/fa";
const Messages = ({ name, status, time, content, image }) => {
  return (
    <div className="flex flex-row gap-6">
      <img src={image} alt={name} className="rounded-full h-28 w-28" />
      <div className="space-y-1 flex-1">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row space-x-2">
            <p className="font-semibold text-lg">{name}</p>
            {status && (
              <span className="bg-blue-400 text-white font-bold px-2 text-xs rounded-lg flex items-center">
                {status}
              </span>
            )}
          </div>
          <div className="flex flex-row space-x-2">
            <FaEye className="hover:cursor-pointer text-gray-400 text-sm hover:text-blue-400" />
            <FaTrashAlt className="hover:cursor-pointer text-gray-400 text-sm hover:text-blue-400" />
          </div>
        </div>
        <p className="text-blue-400 text-sm">{time} ago</p>
        <p className="text-gray-400 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default Messages;
