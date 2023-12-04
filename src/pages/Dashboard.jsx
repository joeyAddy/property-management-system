import PageHeader from "../components/PageHeader";
import coverImg from "../assets/images/exterior2.jpg";
import { FaHeart, FaHome, FaPlus } from "react-icons/fa";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { useLayoutEffect, useState } from "react";
import Main from "../components/dashboard/Main";
import Profile from "../components/dashboard/Profile";
import MyProperties from "../components/dashboard/MyProperties";
import FavoriteProperties from "../components/dashboard/FavoriteProperties";
import NewProperties from "../components/dashboard/NewProperties";
import ChangePassword from "../components/dashboard/ChangePassword";
import useAuthContext from "../hooks/useAuthContext";
import { deleteCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [section, setSection] = useState("dashboard");

  const [userImage, setUserImage] = useState(null);

  const { cookieUser, user, setUser } = useAuthContext();

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (user === null) {
      console.log(cookieUser, "cookie");
      navigate("/login");
    }
  }, [user]);

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
              <p className="font-bold text-2xl capitalize">
                {cookieUser?.title && cookieUser?.title} {cookieUser?.fullName}
              </p>
              <p className="font-normal text-xl">
                {cookieUser?.role === "agent"
                  ? "Real estate Agent"
                  : "Prospector"}
              </p>
            </div>
            {cookieUser?.photo ? (
              <img
                src={cookieUser?.photo}
                alt="profile photo"
                className="w-1/2 h-full object-cover absolute top-1/2 border-4 border-white"
              />
            ) : userImage ? (
              <img
                src={userImage}
                alt="profile photo"
                className="w-1/2 h-full object-cover absolute top-1/2 border-4 border-white"
              />
            ) : (
              <div className="w-1/2 bg-gray-300 h-full absolute top-1/2 border-4 border-white flex items-center justify-center">
                <p className="text-center text-white font-semibold w-2/3">
                  Go to your profile and add an image
                </p>
              </div>
            )}
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
              {cookieUser.role === "agent" && (
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
              )}
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
                  deleteCookie("user");
                  setUser(null);
                  navigate("/login");
                }}
                className={`flex flex-row space-x-3 cursor-pointer text-sm hover:bg-gray-300 hover:text-blue-400 active:text-blue-400 items-center py-3 px-4 ${
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
            <Profile user={cookieUser} setUserImage={setUserImage} />
          ) : section === "my properties" ? (
            <MyProperties user={cookieUser} />
          ) : section === "favorite properties" ? (
            <FavoriteProperties user={cookieUser} />
          ) : section === "new property" ? (
            <NewProperties user={cookieUser} />
          ) : section === "change password" ? (
            <ChangePassword />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
