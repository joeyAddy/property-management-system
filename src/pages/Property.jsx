/* eslint-disable no-undef */
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { TfiBookmarkAlt, TfiCheckBox } from "react-icons/tfi";
import PageHeader from "../components/PageHeader";
import { Listings } from "../constants/Listings";
import ListingCard from "../components/home/ListingCard";
import { Link, useParams } from "react-router-dom";
import PostImg2 from "../assets/images/bedroom1.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { useState, useEffect, useLayoutEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { server } from "../constants/server";
import { notify } from "../components/Notify";
import axiosInstance from "../constants/api";
import useAuthContext from "../hooks/useAuthContext";

// Initialization for ES Users
import { Modal, Ripple, initTE } from "tw-elements";

const Property = () => {
  useLayoutEffect(() => {
    initTE({ Modal, Ripple });
  });
  const { id } = useParams();

  const { cookieUser } = useAuthContext();

  const [property, setProperty] = useState(null);

  const [agent, setAgent] = useState(null);

  const [isProcessingTransaction, setIsProcessingTransaction] = useState(false);

  const { data, loading, error } = useAxiosFetch(`${server}property/${id}`);

  const [form, setForm] = useState({
    user: cookieUser?._id,
    agent: agent,
    property: id,
    type: "Buyout",
    amount: property?.price,
    description: "",
  });

  useEffect(() => {
    (async () => {
      if (error) {
        if (error?.response?.status === 500) {
          notify(error.response.data?.error, "error");
        }
        notify(error.response?.data?.errorMessage, "error");

        console.log(error.response.status, "error");
      }
      if (data) {
        // notify("Profile update successful.", "success");
        try {
          await axiosInstance
            .get(`${server}user/${data.data.agent}`)
            .then((response) => {
              setAgent(response.data.data);
            });
        } catch (error) {
          console.log("====================================");
          console.log(error, "get agent error");
          console.log("====================================");
        }
        setProperty(data.data);
        console.log(data.data, "data");
      }
    })();
  }, [data, error]);

  const handleMessage = (e) => {
    e.preventDefault();
  };
  const handleInitiateTransaction = (e) => {
    e.preventDefault();

    setIsProcessingTransaction(true);

    setTimeout(() => {
      setIsProcessingTransaction(false);
    }, 3000);
  };

  return (
    <>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-screen overflow-y-hidden overflow-x-hidden outline-none"
        id="transactionModal"
        tabIndex="-1"
        aria-labelledby="transactionModal"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalVaryingLabel"
              >
                Start a Transaction
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="relative flex-auto p-6" data-te-modal-body-ref>
              <form>
                <div className="mb-3">
                  <p className="font-semibold flex text-red-800">
                    This Property will be taken out of the market and a mesasge
                    will be sent to the agent about your secrious interest to
                    purchase this property within the next seven days. If this
                    is okay with you, then continue to start a transaction.
                  </p>
                </div>
                <div className="mb-6 flex space-x-4">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="role"
                      id="roleClient"
                      value={form.role}
                      onChange={() => {
                        setForm({ ...form, type: "Buyout" });
                      }}
                    />
                    <label
                      className="mt-px text-gray-900 inline-block pl-[0.15rem] opacity-50 hover:pointer-events-none"
                      htmlFor="roleClient"
                    >
                      Buying
                    </label>
                  </div>
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="role"
                      id="roleAgent"
                      value={form.role}
                      onChange={() => {
                        setForm({ ...form, type: "Rent" });
                      }}
                    />
                    <label
                      className="mt-px text-gray-900 inline-block pl-[0.15rem] opacity-50 hover:pointer-events-none"
                      htmlFor="roleAgent"
                    >
                      Renting
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text">Description:</label>
                  <textarea
                    className="relative m-0 -mr-0.5 block w-full flex-auto rounded-lg border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-500 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleInitiateTransaction}
                className="ml-1 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {isProcessingTransaction === true ? "Processing..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="h-auto">
        <PageHeader title="property" />
        <div className="flex flex-col">
          {loading === false && !error && property != null ? (
            <div className="my-16 mx-6 md:mx-36">
              <div className="grid lg:grid-cols-8 shadow-lg p-5">
                <div className="col-span-3">
                  <div className="flex space-x-2 items-center">
                    <h3 className="font-bold text-2xl">{property.title}</h3>
                    <span className="bg-red-400 rounded-md text-xs text-white font-bold px-2">
                      {property.status}
                    </span>
                  </div>
                  <p>{property.type}</p>
                  <div className="space-x-1 w-full flex items-center text-sm text-gray-400 my-3">
                    <CiLocationOn className="font-semibold" />
                    <p className="">
                      {property.address}, {property.state}
                    </p>
                  </div>
                </div>
                <div className="col-span-3 flex items-center space-x-8">
                  <div>
                    <p className="font-semibold">Bedrooms</p>
                    <p className="text-gray-400">{property.bedrooms}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Washrooms</p>
                    <p className="text-gray-400">{property.bathrooms}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Size(Sq.ft)</p>
                    <p className="text-gray-400">{property.area}</p>
                  </div>
                </div>
                <div className="col-span-2 items-center flex space-x-4">
                  <button className="bg-blue-400 items-center rounded-md text-white p-2">
                    <CiHeart className="font-semibold text-2xl" />
                  </button>
                  <button className="bg-blue-400 items-center rounded-md text-white p-2">
                    <TfiBookmarkAlt className="font-semibold text-2xl" />
                  </button>
                  <span className="text-3xl font-normal">
                    ${property.price}
                  </span>
                </div>
              </div>
              <div className="my-5 ">
                <img
                  src={property.images[0]}
                  alt="Apartment"
                  className="h-[500px] w-full"
                />
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="col-span-2">
                  <div className="border-b border-solid pb-3">
                    <p className="text-2xl font-semibold">
                      Property Description
                    </p>
                  </div>
                  <p className="my-8 text-gray-400 text-md">
                    {property.description}
                  </p>
                  <div>
                    <div className="border-b border-solid pb-3">
                      <p className="text-2xl font-semibold">Details</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8 my-6">
                      <div className="col-span-1">
                        <p className="text-gray-400 text-sm my-2">
                          <span className="font-bold mr-3 text-black">
                            Building Age:
                          </span>
                          2 Years
                        </p>
                        <p className="text-gray-400 text-sm my-2">
                          <span className="font-bold mr-3 text-black">
                            Parking:
                          </span>
                          Attached Garage
                        </p>
                        <p className="text-gray-400 text-sm my-2">
                          <span className="font-bold mr-3 text-black">
                            {" "}
                            Cooling:
                          </span>
                          Central Cooling
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-gray-400 text-sm my-2">
                          <span className="font-bold mr-3 text-black">
                            Heating:
                          </span>
                          Forced Air, Gas
                        </p>
                        <p className="text-gray-400 text-sm my-2">
                          <span className="font-bold mr-3 text-black">
                            Sewer:
                          </span>
                          Public/City
                        </p>
                        <p className="text-gray-400 text-sm my-2">
                          <span className="font-bold mr-3 text-black">
                            {" "}
                            Water:
                          </span>
                          Borehole
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-gray-400 text-sm my-2">
                          <span className="font-bold mr-3 text-black">
                            Exercise Room:
                          </span>
                          Yes
                        </p>
                        <p className="text-gray-400 text-sm my-2">
                          <span className="font-bold mr-3 text-black">
                            Storage Room:
                          </span>
                          Yes
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-b border-solid pb-3">
                      <p className="text-2xl font-semibold">Features</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8 my-6">
                      <div className="col-span-1">
                        <p className="text-blue-400 text-sm my-2 flex gap-2">
                          <TfiCheckBox className="text-lg" />
                          <span className="font-bold mr-3 text-black">
                            Air Conditioning
                          </span>
                        </p>
                        <p className="text-blue-400 text-sm my-2 flex gap-2">
                          <TfiCheckBox className="text-lg" />
                          <span className="font-bold mr-3 text-black">
                            Central Heating
                          </span>
                        </p>
                        <p className="text-blue-400 text-sm my-2 flex gap-2">
                          <TfiCheckBox className="text-lg" />
                          <span className="font-bold mr-3 text-black">
                            Laundry Room
                          </span>
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-blue-400 text-sm my-2 flex gap-2">
                          <TfiCheckBox className="text-lg" />
                          <span className="font-bold mr-3 text-black">
                            Window Covering
                          </span>
                        </p>
                        <p className="text-blue-400 text-sm my-2 flex gap-2">
                          <TfiCheckBox className="text-lg" />
                          <span className="font-bold mr-3 text-black">
                            Swimming Pool
                          </span>
                        </p>
                        <p className="text-blue-400 text-sm my-2 flex gap-2">
                          <TfiCheckBox className="text-lg" />
                          <span className="font-bold mr-3 text-black">
                            Central Heating
                          </span>
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-blue-400 text-sm my-2 flex gap-2">
                          <TfiCheckBox className="text-lg" />
                          <span className="font-bold mr-3 text-black">Gym</span>
                        </p>
                        <p className="text-blue-400 text-sm my-2 flex gap-2">
                          <TfiCheckBox className="text-lg" />
                          <span className="font-bold mr-3 text-black">
                            Internet
                          </span>
                        </p>
                        <p className="text-blue-400 text-sm my-2 flex gap-2">
                          <TfiCheckBox className="text-lg" />
                          <span className="font-bold mr-3 text-black">
                            Alarm
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 space-y-4">
                  <div className="border-b border-solid pb-5 items-center flex space-x-4">
                    <button className="bg-gray-400 items-center rounded-md text-white p-1">
                      <CiHeart className="font-semibold text-md" />
                    </button>
                    <button className="bg-gray-400 items-center rounded-md text-white p-1">
                      <TfiBookmarkAlt className="font-semibold text-md" />
                    </button>
                  </div>
                  <div className="p-6 border-solid border rounded-md space-y-6">
                    <div className="flex flex-row gap-4 items-center">
                      <img
                        src={agent?.profile?.photo}
                        alt=""
                        className="h-20 w-20 rounded-md"
                      />
                      <div>
                        <p className="font-bold text-md">
                          {agent?.profile?.title} {agent?.user.fullName}
                        </p>
                        <p className="text-gray-400 text-sm flex flex-row items-center space-x-2">
                          <FaPhone /> <span>{agent?.user.phone}</span>
                        </p>
                      </div>
                    </div>
                    <form action="post" className="space-y-4 w-full">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                        className="border border-solid py-2 px-4 rounded-md w-full"
                      />
                      <input
                        type="tel"
                        name=""
                        id=""
                        placeholder="Phone"
                        className="border border-solid py-2 px-4 rounded-md w-full"
                      />

                      <p className="text-gray-400 text-sm w-full">
                        I&apos;m interested in this property [ID 123456] and
                        I&apos;d like to know more details.
                      </p>

                      <button
                        onClick={handleMessage}
                        className="w-full bg-blue-400 text-white uppercase py-2 px-4 rounded-md"
                      >
                        Send Message
                      </button>
                      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                          Or
                        </p>
                      </div>
                      <button
                        type="button"
                        data-te-toggle="modal"
                        data-te-target="#transactionModal"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="w-full bg-green-400 focus:ring-2 text-white uppercase py-2 px-4 rounded-md"
                      >
                        Secure Property
                      </button>
                    </form>
                  </div>
                  <p className="uppercase text-xl text-gray-600 font-bold pt-5">
                    Featured Properties
                  </p>
                  <div className="bg-gray-50 rounded-md">
                    <div className="w-full h-1/2 rounded-tl-md rounded-tr-md ">
                      <img className="object-cover" src={PostImg2} alt="Post" />
                    </div>
                    <div className="p-4 space-y-3">
                      <div>
                        <p className="text-xl text-gray-600">
                          Eagle Apartments
                        </p>
                        <p className="text-xl text-gray-600 font-medium">
                          $4,500
                        </p>
                      </div>
                      <div className="bg-blue-600 text-white flex flex-col p-6">
                        <table>
                          <tbody>
                            <tr className="text-sm text-center">
                              <th>Area</th>
                              <th>Rooms</th>
                              <th>Beds</th>
                              <th>Baths</th>
                            </tr>
                            <tr className="text-sm text-center">
                              <td>530 sq ft</td>
                              <td>2</td>
                              <td>4</td>
                              <td>5</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <p className="uppercase text-xl text-gray-600 font-bold pt-5">
                    Social Media
                  </p>
                  <div className="flex items-center justify-start text-lg text-gray-900 space-x-3">
                    <Link className="flex items-center cursor-pointer bg-gray-50 rounded-md p-5 hover:text-white  hover:bg-blue-400">
                      <FaFacebookF />
                    </Link>
                    <Link className="flex items-center cursor-pointer bg-gray-50 rounded-md p-5 hover:text-white hover:bg-blue-400">
                      <FaTwitter />
                    </Link>
                    <Link className="flex items-center cursor-pointer bg-gray-50 rounded-md p-5 hover:text-white hover:bg-blue-400">
                      <FaInstagram />
                    </Link>
                    <Link className="flex items-center cursor-pointer bg-gray-50 rounded-md p-5 hover:text-white hover:bg-blue-400">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="border-b border-solid pb-3">
                  <p className="text-2xl font-semibold">Similar Properties</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 mt-8">
                  {Listings.slice(0, 3).map(
                    (
                      {
                        title,
                        price,
                        description,
                        address,
                        listClass,
                        image,
                      } = item,
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
              </div>
            </div>
          ) : error && loading === true ? (
            <div className="w-full flex items-center justify-center">
              <p className="text-center font-meduim animate-pulse text-lg pt-5">
                Error fetching property information, try refreshing the page{" "}
              </p>
            </div>
          ) : (
            <div className="w-full flex items-center justify-center">
              <p className="text-center font-meduim animate-pulse text-lg pt-5">
                Fetching Property Details...
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Property;
