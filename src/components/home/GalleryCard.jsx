import { FaSearchPlus } from "react-icons/fa";

const GalleryCard = ({ image, title }) => {
  return (
    <div className="col-span-1 h-auto relative">
      <img className="h-96 object-cover" src={image} alt="gallery item" />
      <div className="absolute top-0 left-0 h-96 w-full bg-black opacity-0 hover:opacity-75 flex flex-col gap-8 transition-opacity delay-150 ease-linear duration-300 items-center justify-center">
        <button className="bg-blue-600 rounded-md p-5 text-white text-xl">
          <FaSearchPlus />
        </button>
        <p className="text-white text-3xl font-bold px-6 text-center">{title}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
