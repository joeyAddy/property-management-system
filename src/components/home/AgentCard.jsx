import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AgentCard = ({ name, image }) => {
  return (
    <div className="col-span-1 h-auto hover:shadow-2xl transition-all delay-100 ease-in-out hover:-translate-y-2 hover:rounded-lg ">
      <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative">
          <img
            class="rounded-t-lg w-full h-80 object-fill md:object-cover"
            src={image}
            alt=""
            loading="lazy"
          />
          <div className="flex items-center justify-around gap-2 px-16 absolute top-0 left-0 rounded-tl-lg rounded-tr-lg max-w-full w-full h-80 bg-black opacity-0 hover:opacity-70 transition-opacity duration-200 ease-in-out">
            <Link
              to="#"
              className="border-2 border-white rounded p-3.5 text-white hover:bg-blue-400 text-lg"
            >
              <FaLinkedinIn />
            </Link>
            <a
              href="#"
              className="border-2 border-white rounded p-3.5 text-white hover:bg-blue-400 text-lg"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="border-2 border-white rounded p-3.5 text-white hover:bg-blue-400 text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="border-2 border-white rounded p-3.5 text-white hover:bg-blue-400 text-lg"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div class="p-6 text-center">
          <p className="text-2xl font-bold text-gray-800 mb-1">{name}</p>
          <p className="text-lg text-gray-400">Real Estate Agent</p>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
