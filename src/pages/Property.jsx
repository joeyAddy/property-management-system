/* eslint-disable no-undef */
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { TfiBookmarkAlt, TfiCheckBox } from "react-icons/tfi";
import PageHeader from "../components/PageHeader";
import image from "../assets/images/bedroom3.jpg";
import { Listings } from "../constants/Listings";
import ListingCard from "../components/home/ListingCard";
import { Link } from "react-router-dom";
import PostImg2 from "../assets/images/bedroom1.jpg";
import agentImg from "../assets/images/agent2.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Property = () => {
  return (
    <section className="h-auto">
      <PageHeader title="property" />
      <div className="flex flex-col">
        <div className="my-16 mx-6 md:mx-36">
          <div className="grid lg:grid-cols-8 shadow-lg p-5">
            <div className="col-span-3">
              <div className="flex space-x-2 items-center">
                <h3 className="font-bold text-3xl">Luxury Apartment</h3>
                <span className="bg-red-400 rounded-md text-xs text-white font-bold px-2">
                  SALE
                </span>
              </div>
              <p>Living Room</p>
              <div className="space-x-1 w-full flex items-center text-sm text-gray-400 my-3">
                <CiLocationOn className="font-semibold" />
                <p className="">York Blvd, Los Angeles, US View, CA 94041USA</p>
              </div>
            </div>
            <div className="col-span-3 flex items-center space-x-8">
              <div>
                <p className="font-semibold">Bedrooms</p>
                <p className="text-gray-400">05</p>
              </div>
              <div>
                <p className="font-semibold">Washrooms</p>
                <p className="text-gray-400">04</p>
              </div>
              <div>
                <p className="font-semibold">Size(Sq.ft)</p>
                <p className="text-gray-400">1234</p>
              </div>
            </div>
            <div className="col-span-2 items-center flex space-x-4">
              <button className="bg-blue-400 items-center rounded-md text-white p-2">
                <CiHeart className="font-semibold text-2xl" />
              </button>
              <button className="bg-blue-400 items-center rounded-md text-white p-2">
                <TfiBookmarkAlt className="font-semibold text-2xl" />
              </button>
              <span className="text-3xl font-normal">$22,250</span>
            </div>
          </div>
          <div className="my-5 ">
            <img src={image} alt="Apartment" className="h-[500px] w-full" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="border-b border-solid pb-3">
                <p className="text-2xl font-semibold">Property Description</p>
              </div>
              <p className="my-8 text-gray-400 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut
                adipiscing gravida tincidunt. Duis euismod placerat rhoncus.
                Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris
                at ante mauris. Aliquam posuere fermentum lorem, a aliquam
                mauris rutrum a. Curabitur sit amet pretium lectus, nec
                consequat orci. <br /> Duis non tincidunt dui. Sed vehicula,
                libero at eleifend accumsan, lectus massa mollis metus, a
                malesuada velit orci nec elit Suspendisse nisl mauris, rhoncus
                quis faucibus vitae, commodo vitae neque. Nullam vulputate
                feugiat diam, id tempor neque hendreit quis. Curabitur ut felis
                ultrices, pellentesque augue ac, bibendum lorem. Curabitur non
                volutpat augue. Aliquam malesuada scelerisque tortor eget
                mollis. <br /> Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Facere nisi sequi quo laborum eveniet illum ex
                doloremque porro repellat. Saepe sed atque eos inventore facilis
                officiis dolorum, incidunt optio iure! Itaque libero et vel
                labore voluptatem natus nulla, sunt quaerat velit officia! Ipsum
                fuga magni, sapiente reprehenderit dolores eaque excepturi
                facilis, praesentium.
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
                      <span className="font-bold mr-3 text-black">Sewer:</span>
                      Public/City
                    </p>
                    <p className="text-gray-400 text-sm my-2">
                      <span className="font-bold mr-3 text-black"> Water:</span>
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
                      <span className="font-bold mr-3 text-black">Alarm</span>
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
                  <img src={agentImg} alt="" className="h-20 w-20 rounded-md" />
                  <div>
                    <p className="font-bold text-md">Isa Ahmadu</p>
                    <p className="text-gray-400 text-sm flex flex-row items-center space-x-2">
                      <FaPhone /> <span>(123) 123-456</span>
                    </p>
                  </div>
                </div>
                <form action="post" className="space-y-4">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    className="border border-solid py-2 px-4 rounded-md"
                  />
                  <input
                    type="tel"
                    name=""
                    id=""
                    placeholder="Phone"
                    className="border border-solid py-2 px-4 rounded-md"
                  />

                  <p className="text-gray-400 text-sm w-full">
                    I&apos;m interested in this property [ID 123456] and
                    I&apos;d like to know more details.
                  </p>

                  <button className="w-full bg-blue-400 text-white uppercase py-2 px-4 rounded-md">
                    Send Message
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
                    <p className="text-xl text-gray-600">Eagle Apartments</p>
                    <p className="text-xl text-gray-600 font-medium">$4,500</p>
                  </div>
                  <div className="bg-blue-600 text-white flex flex-col p-6">
                    <table>
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
      </div>
    </section>
  );
};

export default Property;
