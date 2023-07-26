import PageHeader from "../components/PageHeader";
import coverImg from "../assets/images/exterior2.jpg";
import profileImg from "../assets/images/agent3.jpg";
import { FaHeart, FaHome, FaPlus } from "react-icons/fa";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { useState } from "react";
import Main from "../components/dashboard/Main";
import Profile from "../components/dashboard/Profile";
import MyProperties from "../components/dashboard/MyProperties";
import FavoriteProperties from "../components/dashboard/FavoriteProperties";
import NewProperties from "../components/dashboard/NewProperties";
import ChangePassword from "../components/dashboard/ChangePassword";

const Dashboard = () => {
  const [section, setSection] = useState("dashboard");
  return (
    <section className="h-auto">
      <PageHeader title="Dashboard" />
      <div className="grid lg:grid-cols-3 my-16 gap-8 mx-6 md:mx-36">
        <div className="col-span-1 shadow-round h-fit">
          <div className="flex items-center flex-col relative">
            <img
              src={coverImg}
              alt="cover photo"
              className="w-full h-40 object-cover "
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="text-center text-white absolute top-3">
              <p className="font-bold text-2xl">Emmanuella Anebi</p>
              <p className="font-normal text-xl">Real estate Agent</p>
            </div>
            <img
              src={profileImg}
              alt="profile photo"
              className="w-1/2 h-full object-cover absolute top-1/2 border-4 border-white"
            />
          </div>
          <div className="py-3">
            <ul className="mt-24">
              <li
                onClick={() => {
                  setSection("dashboard");
                }}
                className={`flex flex-row space-x-3 cursor-pointer text-sm hover:bg-gray-300 hover:text-blue-400 items-center py-3 px-4 ${
                  section === "dashboard"
                    ? "text-blue-400 bg-gray-300 font-semibold"
                    : "text-gray-400"
                }`}
              >
                <LuLayoutDashboard />
                <a>Dashboard</a>
              </li>
              <li
                onClick={() => {
                  setSection("profile");
                }}
                className={`flex flex-row space-x-3 cursor-pointer text-sm hover:bg-gray-300 hover:text-blue-400 items-center py-3 px-4 ${
                  section === "profile"
                    ? "text-blue-400 bg-gray-300 font-semibold"
                    : "text-gray-400"
                }`}
              >
                <BsPerson />
                <a>Profile</a>
              </li>
              <li
                onClick={() => {
                  setSection("my properties");
                }}
                className={`flex flex-row space-x-3 cursor-pointer text-sm hover:bg-gray-300 hover:text-blue-400 items-center py-3 px-4 ${
                  section === "my properties"
                    ? "text-blue-400 bg-gray-300 font-semibold"
                    : "text-gray-400"
                }`}
              >
                <FaHome />
                <a>My Properties</a>
              </li>
              <li
                onClick={() => {
                  setSection("favorite properties");
                }}
                className={`flex flex-row space-x-3 cursor-pointer text-sm hover:bg-gray-300 hover:text-blue-400 items-center py-3 px-4 ${
                  section === "favorite properties"
                    ? "text-blue-400 bg-gray-300 font-semibold"
                    : "text-gray-400"
                }`}
              >
                <FaHeart />
                <a>Favorite Properties</a>
              </li>
              <li
                onClick={() => {
                  setSection("new property");
                }}
                className={`flex flex-row space-x-3 cursor-pointer text-sm hover:bg-gray-300 hover:text-blue-400 items-center py-3 px-4 ${
                  section === "new property"
                    ? "text-blue-400 bg-gray-300 font-semibold"
                    : "text-gray-400"
                }`}
              >
                <FaPlus />
                <a>Submit New Property</a>
              </li>
              <li
                onClick={() => {
                  setSection("change password");
                }}
                className={`flex flex-row space-x-3 cursor-pointer text-sm hover:bg-gray-300 hover:text-blue-400 items-center py-3 px-4 ${
                  section === "change password"
                    ? "text-blue-400 bg-gray-300 font-semibold"
                    : "text-gray-400"
                }`}
              >
                <MdPassword />
                <a>Change Password</a>
              </li>
              <li
                onClick={() => {
                  setSection("logout");
                }}
                className={`flex flex-row space-x-3 text-sm hover:bg-gray-300 hover:text-blue-400 active:text-blue-400 items-center py-3 px-4 ${
                  section === "logout"
                    ? "text-blue-400 bg-gray-300 font-semibold"
                    : "text-gray-400"
                }`}
              >
                <LuLogOut />
                <a>Log out</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          {section === "dashboard" ? (
            <Main />
          ) : section === "profile" ? (
            <Profile />
          ) : section === "my properties" ? (
            <MyProperties />
          ) : section === "favorite properties" ? (
            <FavoriteProperties />
          ) : section === "new property" ? (
            <NewProperties />
          ) : section === "change password" ? (
            <ChangePassword />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
