import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { BiLockAlt, BiPen } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const [urlPath, setUrlPath] = useState("");

  useEffect(() => {
    setUrlPath(pathname.replace("/", ""));
  }, [pathname]);

  return (
    <header className="hs-fit sticky top-0 w-full z-[1030] bg-white">
      <div className="w-full">
        <section>
          <div className="bg-blue-600 h-auto alert alert-dismissible fade show  w-full text-white  md:flex justify-between items-center text-center md:text-left pl-3 pr-5 pt-6 md:pt-0 md:px-36 ">
            <div className="space-x-2 mb-4 h-10 md:mb-0 flex items-center text-sm flex-wrap justify-center md:justify-start">
              <div className="space-x-2 flex items-center cursor-pointer">
                <BsTelephone />
                <p>+2349123453545</p>
              </div>
              <div className="space-x-2 flex items-center cursor-pointer">
                <AiOutlineMail />
                <p>info@isaestates.com.ng</p>
              </div>
              <div className="space-x-2 flex items-center cursor-pointer">
                <CiLocationOn className="font-semibold" />
                <p>Area 34, Mahuta, Kaduna</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-sm h-10">
              <div className="space-x-3 flex mr-2">
                <Link to="/login" className="flex items-center space-x-1">
                  <BiLockAlt />
                  <span>Login</span>
                </Link>
                <span>|</span>
                <Link to="/register" className="flex items-center space-x-1">
                  <BiPen />
                  <span>Register</span>
                </Link>
              </div>
              <div className="flex h-full">
                <div className="border-r border-gray-400 px-3 h-full flex items-center cursor-pointer hover:bg-blue-400">
                  <FaFacebookF />
                </div>
              </div>
              <div className="flex h-full">
                <div className="border-r border-gray-400 px-3 h-full flex items-center cursor-pointer hover:bg-blue-400">
                  <FaTwitter />
                </div>
              </div>
              <div className="flex h-full">
                <div className="border-r border-gray-400 px-3 h-full flex items-center cursor-pointer hover:bg-blue-400">
                  <FaInstagram />
                </div>
              </div>
              <div className="flex h-full">
                <div className="border-r border-gray-400 px-3 h-full flex items-center cursor-pointer hover:bg-blue-400">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <nav
        className="relative flex w-full items-center justify-between bg-white py-4 text-neutral-600 shadow-lg hover:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full items-center justify-between ml-3 mr-5 md:px-32 space-x-3 md:space-x-0">
          <div className="flex items-center">
            <button
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              text-white
              data-te-collapse-init
              data-te-target="#navbarSupportedContentX"
              aria-controls="navbarSupportedContentX"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex">
            <h1 className="font-extrabold tracking-widest text-xl lg:text-3xl text-blue-600 m-0">
              LOGO
            </h1>
          </div>

          <div
            className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentX"
            data-te-collapse-item
          >
            <ul
              className="mr-auto flex flex-col lg:flex-row uppercase font-semibold mx-auto"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0" data-te-nav-item-ref>
                <Link
                  className={`block transition duration-150 ease-in-out lg:p-3 text-sm  hover:text-blue-400 ${
                    urlPath === "" ? "bg-blue-600 rounded-md text-white" : ""
                  }`}
                  to="/"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Home
                </Link>
              </li>
              <li className="mb-4 lg:mb-0" data-te-nav-item-ref>
                <Link
                  className={`block transition duration-150 ease-in-out lg:p-3 text-sm hover:text-blue-400 hover:focus:text-white  ${
                    urlPath === "listing"
                      ? "bg-blue-600 rounded-md text-white"
                      : ""
                  }`}
                  to="listing"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Listing
                </Link>
              </li>
              <li className="mb-4 lg:mb-0" data-te-nav-item-ref>
                <Link
                  className={`block transition duration-150 ease-in-out lg:p-3 text-sm hover:text-blue-400 hover:focus:text-white  ${
                    urlPath === "property"
                      ? "bg-blue-600 rounded-md text-white"
                      : ""
                  }`}
                  to="/property"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Property
                </Link>
              </li>
              <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
                <Link
                  className={`block transition duration-150 ease-in-out lg:p-3 text-sm hover:text-blue-400 hover:focus:text-white  ${
                    urlPath === "gallery"
                      ? "bg-blue-600 rounded-md text-white"
                      : ""
                  }`}
                  to="/gallery"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Gallery
                </Link>
              </li>
              <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
                <Link
                  className={`block transition duration-150 ease-in-out lg:p-3 text-sm hover:text-blue-400 hover:focus:text-white  ${
                    urlPath === "blog"
                      ? "bg-blue-600 rounded-md text-white"
                      : ""
                  }`}
                  to="/blog"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
                <Link
                  className={`block transition duration-150 ease-in-out lg:p-3 text-sm hover:text-blue-400 hover:focus:text-white  ${
                    urlPath === "contact-us"
                      ? "bg-blue-600 rounded-md text-white"
                      : ""
                  }`}
                  to="/contact-us"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-1 lg:flex-none lg:w-60 flex-wrap border border-solid border-neutral-300 bg-transparent rounded-md">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-0 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight bg-white  transition duration-150 ease-in-out hover: text-smbg-primary-700  focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
