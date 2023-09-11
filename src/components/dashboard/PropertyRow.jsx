/* eslint-disable react/prop-types */
import { IoMdHeartDislike } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FaHeart, FaSpinner, FaTrashAlt } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { server } from "../../constants/server";
import { useEffect, useState } from "react";
import { notify } from "../Notify";
import useAxiosPost from "../../hooks/useAxiosPost";

const PropertyRow = ({
  image,
  price,
  title,
  address,
  date,
  id,
  favorite,
  refetch,
}) => {
  const { data, loading, error, postData } = useAxiosPost();

  const [message, setMessage] = useState("");
  const [favorited, setFavorited] = useState("");

  const handleAddToFavorite = () => {
    setMessage("Added to favorites successfully");
    postData(`${server}property/favorite?id=${id}&favorite=${true}`);
  };
  const handleRemoveToFavorite = () => {
    setMessage("Removed from favorites successfully");
    postData(`${server}property/favorite?id=${id}&favorite=${false}`);
  };

  useEffect(() => {
    if (favorited !== "") {
      refetch();
    }
  }, [favorited]);

  useEffect(() => {
    if (error) {
      if (error?.response?.status === 500) {
        notify(error.response.data?.error, "error");
      }
      notify(error.response?.data?.errorMessage, "error");

      console.log(error.response.status, "error");
    }
    if (data) {
      notify(message, "success");
      setFavorited(data.data.favorite);
      console.log(data.data.favorite, "data");
    }
  }, [data, error]);
  return (
    <tr className="border-b dark:border-neutral-500 cursor-pointer">
      <td className="whitespace-nowrap py-8">
        <div className="font-semibold text-gray-600 flex flex-col lg:flex-row gap-4">
          <img src={image} alt="bedroom" className="h-20 w-24" />
          <div className="space-y-2">
            <p className="font-semibold text-[1rem] text-left">{title}</p>
            <div className="space-x-1 w-full flex items-center text-gray-400 my-3">
              <CiLocationOn className="text-md" />
              <p className="font-extralight text-sm">{address}</p>
            </div>
            <p className="text-sm text-left flex text-gray-400 font-extralight">
              <TbCurrencyNaira className="text-lg" /> {price}
            </p>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap  px-6 py-4 w-32">{date}</td>
      <td className="whitespace-nowrap  px-6 py-4 w-24">34</td>
      <td className="whitespace-nowrap  px-6 py-4 w-24">
        <div className="text-gray-600 flex flex-row space-x-2">
          <FiEdit className="hover:cursor-pointer hover:text-blue-400" />{" "}
          <FaTrashAlt className="hover:cursor-pointer hover:text-blue-400" />
          {loading === true ? (
            <FaSpinner className="animate-spin" />
          ) : favorite === true || favorited === true ? (
            <IoMdHeartDislike
              onClick={handleRemoveToFavorite}
              className="hover:cursor-pointer hover:text-blue-400"
            />
          ) : (
            <FaHeart
              onClick={handleAddToFavorite}
              className={`hover:cursor-pointer hover:text-blue-400`}
            />
          )}
        </div>
      </td>
    </tr>
  );
};

export default PropertyRow;
