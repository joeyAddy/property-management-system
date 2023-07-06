import React from "react";
import GalleryCard from "./home/GalleryCard";
import { Gallery } from "../constants/Gallery";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="md:w-1/2 mx-6 md:mx-auto">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 flex-row"
            role="tablist"
          >
            <li className="mb-2 md:-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-medium uppercase px-5 py-3.5 mb-2 bg-opacity-75 hover:shadow-lg hover:bg-opacity-100 border-2 border-blue-600 rounded block leading-normal transition-all ease-in-out duration-300 delay-150 " +
                  (openTab === 1
                    ? "text-blue-600 bg-white"
                    : "bg-blue-600 text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All
              </a>
            </li>
            <li className="mb-2 md:-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-medium uppercase px-5 py-3.5 mb-2 bg-opacity-75 hover:shadow-lg hover:bg-opacity-100 border-2 border-blue-600 rounded block leading-normal transition-all ease-in-out duration-300 delay-150 " +
                  (openTab === 2
                    ? "text-blue-600 bg-white"
                    : "bg-blue-600 text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Living Room
              </a>
            </li>
            <li className="mb-2 md:-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-medium uppercase px-5 py-3.5 mb-2 bg-opacity-75 hover:shadow-lg hover:bg-opacity-100 border-2 border-blue-600 rounded block leading-normal transition-all ease-in-out duration-300 delay-150 " +
                  (openTab === 3
                    ? "text-blue-600 bg-white"
                    : "bg-blue-600 text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Bedroom
              </a>
            </li>
            <li className="mb-2 md:-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-medium uppercase px-5 py-3.5 mb-2 bg-opacity-75 hover:shadow-lg hover:bg-opacity-100 border-2 border-blue-600 rounded block leading-normal transition-all ease-in-out duration-300 delay-150 " +
                  (openTab === 4
                    ? "text-blue-600 bg-white"
                    : "bg-blue-600 text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Kitchen
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col min-w-0 break-words h-auto w-full mb-6 ">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="grid lg:grid-cols-3 gap-5 mt-5">
                  {Gallery.map(({ title, image, type } = gallery, index) => (
                    <div key={index}>
                      <GalleryCard title={title} image={image} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="grid lg:grid-cols-3 gap-5 mt-5">
                  {Gallery.map(
                    ({ title, image, type } = gallery, index) =>
                      type === "living room" && (
                        <div key={index}>
                          <GalleryCard title={title} image={image} />
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="grid lg:grid-cols-3 gap-5 mt-5">
                  {Gallery.map(
                    ({ title, image, type } = gallery, index) =>
                      type === "bedroom" && (
                        <div key={index}>
                          <GalleryCard title={title} image={image} />
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                <div className="grid lg:grid-cols-3 gap-5 mt-5">
                  {Gallery.map(
                    ({ title, image, type } = gallery, index) =>
                      type === "kitchen" && (
                        <div key={index}>
                          <GalleryCard title={title} image={image} />
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
