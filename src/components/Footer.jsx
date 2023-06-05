import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-gray-900 mt-auto w-full mt-5">
      <div className="grid lg:grid-cols-4 py-20 md:px-36">
        <div className="col-span-1">
          <p className="capitalize text-2xl text-white">
            <span className="font-bold mr-2">About</span>Us
          </p>
          <div className="h-auto space-y-4 mt-3 flex flex-col">
            <Link
              to=""
              className="text-gray-400 transition-transform duration-300 w-fit ease-in-out hover:text-white hover:underline hover:underline-offset-2 hover:-translate-y-1 "
            >
              Company
            </Link>
            <Link
              to=""
              className="text-gray-400 transition-transform duration-300 w-fit ease-in-out hover:text-white hover:underline hover:underline-offset-2 hover:-translate-y-1 "
            >
              Team
            </Link>
            <Link
              to=""
              className="text-gray-400 transition-transform duration-300 w-fit ease-in-out hover:text-white hover:underline hover:underline-offset-2 hover:-translate-y-1 "
            >
              Career
            </Link>
            <Link
              to=""
              className="text-gray-400 transition-transform duration-300 w-fit ease-in-out hover:text-white hover:underline hover:underline-offset-2 hover:-translate-y-1 "
            >
              Stock
            </Link>
            <Link
              to=""
              className="text-gray-400 transition-transform duration-300 w-fit ease-in-out hover:text-white hover:underline hover:underline-offset-2 hover:-translate-y-1 "
            >
              Partners
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <p className="capitalize text-2xl text-white">
            <span className="font-bold mr-2">Useful</span>links
          </p>
          <div className="h-auto space-y-4 mt-3 flex flex-col">
            <Link
              to=""
              className="text-gray-400 transition-transform duration-300 w-fit ease-in-out hover:text-white hover:underline hover:underline-offset-2 hover:-translate-y-1 "
            >
              Listings
            </Link>
            <Link
              to=""
              className="text-gray-400 transition-transform duration-300 w-fit ease-in-out hover:text-white hover:underline hover:underline-offset-2 hover:-translate-y-1 "
            >
              Terms and Services
            </Link>
            <Link
              to=""
              className="text-gray-400 transition-transform duration-300 w-fit ease-in-out hover:text-white hover:underline hover:underline-offset-2 hover:-translate-y-1 "
            >
              Agents
            </Link>
            <Link
              to=""
              className="text-gray-400 transition-transform duration-300 w-fit ease-in-out hover:text-white hover:underline hover:underline-offset-2 hover:-translate-y-1 "
            >
              Gallery
            </Link>
            <Link
              to=""
              className="text-gray-400 transition-transform duration-300 w-fit ease-in-out hover:text-white hover:underline hover:underline-offset-2 hover:-translate-y-1 "
            >
              Forum
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <p className="capitalize text-2xl text-white">
            <span className="font-bold mr-2">Contact</span>Info
          </p>
          <div className="h-auto space-y-4 mt-3 flex flex-col ">
            <div className="space-x-2 flex items-center cursor-pointer text-gray-400 hover:text-white">
              <BsTelephone />
              <p>+2349123453545</p>
            </div>
            <div className="space-x-2 flex items-center cursor-pointer text-gray-400 hover:text-white">
              <AiOutlineMail />
              <p>info@isaestates.com.ng</p>
            </div>
            <div className="space-x-2 flex items-center cursor-pointer text-gray-400 hover:text-white">
              <CiLocationOn className="font-semibold" />
              <p>Area 34, Mahuta, Kaduna</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <p className="capitalize text-2xl text-white">
            <span className="font-bold mr-2">Subscribe</span>on our News
          </p>
          <div className="mt-3 flex flex-col space-y-4">
            <div className=" flex bg-white rounded">
              <input
                className="bg-transparent flex-1 py-3 px-4 focus:outline-none"
                type="email"
                placeholder="email@gmail.com"
              />
              <button className="cursor-pointer py-3 px-4 hover:shadow-xl">
                <FaMailBulk />
              </button>
            </div>
            <div className="flex items-center justify-start text-lg text-gray-900 space-x-3">
              <Link className="flex items-center cursor-pointer bg-white rounded-md p-3 hover:text-white  hover:bg-blue-400">
                <FaFacebookF />
              </Link>
              <Link className="flex items-center cursor-pointer bg-white rounded-md p-3 hover:text-white hover:bg-blue-400">
                <FaTwitter />
              </Link>
              <Link className="flex items-center cursor-pointer bg-white rounded-md p-3 hover:text-white hover:bg-blue-400">
                <FaInstagram />
              </Link>
              <Link className="flex items-center cursor-pointer bg-white rounded-md p-3 hover:text-white hover:bg-blue-400">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 w-full py-3 text-center text-gray-200">
        Copyright © {date.getFullYear()} UIdeck All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
