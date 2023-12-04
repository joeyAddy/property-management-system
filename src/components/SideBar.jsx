import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SideBar = ({ setOpenCanvas, openCanvas, urlPath }) => {
  return (
    <div
      className={`${
        openCanvas === true ? "left-0" : "left-[-100%]"
      } flex flex-col w-3/4 h-screen fixed top-0 bg-white text-blue-600 z-[1100] transition-all ease-in-out duration-300 p-10`}
    >
      <span
        onClick={() => {
          setOpenCanvas(false);
        }}
        className="font-semibold self-start cursor-pointer rounded-md px-2 bg-red-600 text-white w-fit mb-6"
      >
        x
      </span>

      <ul
        className="space-y-4 flex flex-col lg:flex-row uppercase font-semibold"
        data-te-navbar-nav-ref
      >
        <li
          onClick={() => {
            setOpenCanvas(false);
          }}
          className="lg:mb-0"
          data-te-nav-item-ref
        >
          <Link
            className={`block transition duration-150 ease-in-out lg:p-3 text-sm  hover:-translate-y-1 ${
              urlPath === "" ? "translate-x-3" : ""
            }`}
            to="/"
            data-te-nav-link-ref
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {">"} Home
          </Link>
        </li>
        <li
          onClick={() => {
            setOpenCanvas(false);
          }}
          className="lg:mb-0"
          data-te-nav-item-ref
        >
          <Link
            className={`block transition duration-150 ease-in-out lg:p-3 text-sm hover:-translate-y-1 hover:focus  ${
              urlPath === "listing" ? "translate-x-3" : ""
            }`}
            to="listing"
            data-te-nav-link-ref
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {"> "} Listing
          </Link>
        </li>

        <li
          onClick={() => {
            setOpenCanvas(false);
          }}
          className="lg:mb-0"
          data-te-nav-item-ref
        >
          <Link
            className={`block transition duration-150 ease-in-out lg:p-3 text-sm hover:-translate-y-1 hover:focus  ${
              urlPath === "gallery" ? "translate-x-3" : ""
            }`}
            to="/gallery"
            data-te-nav-link-ref
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {"> "} Gallery
          </Link>
        </li>
        <li
          onClick={() => {
            setOpenCanvas(false);
          }}
          className="lg:mb-0"
          data-te-nav-item-ref
        >
          <Link
            className={`block transition duration-150 ease-in-out lg:p-3 text-sm hover:-translate-y-1 hover:focus  ${
              urlPath === "blog" ? "translate-x-3" : ""
            }`}
            to="/blog"
            data-te-nav-link-ref
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {"> "} Blog
          </Link>
        </li>
        <li
          onClick={() => {
            setOpenCanvas(false);
          }}
          className="lg:mb-0"
          data-te-nav-item-ref
        >
          <Link
            className={`block transition duration-150 ease-in-out lg:p-3 text-sm hover:-translate-y-1 hover:focus  ${
              urlPath === "contact-us" ? "translate-x-3" : ""
            }`}
            to="/contact-us"
            data-te-nav-link-ref
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {"> "} Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
