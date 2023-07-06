import { Link } from "react-router-dom";
import PostImg from "../../assets/images/spacious-hotel-room-with-rug.jpg";
import { FaChevronRight } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className="shadow-lg">
      <img className="h-[500px] w-full object-cover" src={PostImg} alt="Post" loading="lazy"/>
      <div className="p-10">
        <div className="space-y-5">
          <div className="space-y-2">
            <Link
              to=""
              className="text-xl text-gray-600 font-semibold hover:text-blue-600"
            >
              Great House on The Hills
            </Link>
            <div className="flex">
              <span className="border-r-2 text-gray-400 text-base pr-2 h-fit">
                Novemer 12, 2018
              </span>
              <span className="border-r-2 text-gray-400 text-base px-2 h-fit">
                5 Comments
              </span>
            </div>
          </div>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Class aptent taciti sociosqu ad litora torquent…
          </p>
          <button className="bg-blue-600 text-white px-4 py-3 space-x-2 rounded-md flex items-center">
            <span>Read More</span>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
