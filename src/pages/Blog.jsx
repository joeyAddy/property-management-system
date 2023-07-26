import PageHeader from "../components/PageHeader";
import PostImg from "../assets/images/exterior1.jpg";
import PostImg2 from "../assets/images/bedroom1.jpg";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import BlogCard from "../components/blog/BlogCard";

const Blog = () => {
  return (
    <section className="h-auto">
      <PageHeader title="blog" />
      <div className="grid lg:grid-cols-3 my-16 gap-16 mx-6 md:mx-36">
        <div className="col-span-2">
          <BlogCard />
        </div>
        <div className="col-span-1 space-y-4">
          <p className="uppercase text-xl text-gray-600 font-bold">
            Search Blog
          </p>
          <div className="flex w-full flex-wrap border border-solid border-neutral-300 bg-transparent rounded-md">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto bg-transparent bg-clip-padding px-3 py-[0.75rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-0 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight bg-white  transition duration-150 ease-in-out hover:bg-primary-700  focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
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
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="uppercase text-xl text-gray-600 font-bold pt-5">
            Popular Posts
          </p>
          <div className="space-y-3">
            <div className="flex gap-8 flex-wrap">
              <img
                className="h-32 w-32 object-cover"
                src={PostImg}
                alt="Post"
              />
              <div className="flex flex-col justify-evenly">
                <Link
                  to=""
                  className="text-lg text-gray-600 text-medium hover:text-blue-600"
                >
                  What to Do a Year Before Buying Apartment
                </Link>
                <p className="text-base text-gray-400 text-normal">
                  November 9, 2018
                </p>
              </div>
            </div>
            <div className="flex gap-8 flex-wrap">
              <img
                className="h-32 w-32 object-cover"
                src={PostImg2}
                alt="Post"
              />
              <div className="flex flex-col justify-evenly">
                <Link
                  to=""
                  className="text-lg text-gray-600 text-medium hover:text-blue-600"
                >
                  Bedroom Colors You&apos;ll Never Regret
                </Link>
                <p className="text-base text-gray-400 text-normal">
                  November 9, 2018
                </p>
              </div>
            </div>
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
    </section>
  );
};

export default Blog;
