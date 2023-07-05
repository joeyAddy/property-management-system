import { FaRegCommentDots, FaRegHeart, FaUser } from "react-icons/fa";

const BlogCard = ({ image, title }) => {
  return (
    <div className="h-auto col-span-1 space-y-3 shadow-md hover:shadow-2xl hover:-translate-y-4 transition-transform duration-500">
      <div className="text-center">
        <img className="object-contain h-full w-full" src={image} alt="" loading="lazy" />
        <span className="cursor-pointer relative -top-4  rounded-md px-4 py-3 bg-blue-600 text-white font-medium text-lg uppercase">
          12 January, 2023
        </span>
      </div>
      <div className="flex flex-col items-center space-y-5 py-4 px-5 md:px-10">
        <p className="text-2xl font-bold">{title}</p>
        <span className="bg-blue-600 h-1 w-16"></span>
        <p className="text-lg text-gray-400 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          laudantium fugiat, eius sint.
        </p>
      </div>
      <div className="flex items-center justify-between p-4 border-t-2 text-gray-600">
        <div className="flex space-x-3 items-center">
          <FaUser /> <span>Admin</span>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <FaRegHeart /> <span>350</span>
          </div>
          <div className="flex space-x-1  items-center">
            <FaRegCommentDots /> <span>34</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
