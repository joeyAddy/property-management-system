/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import useAxiosPost from "../../hooks/useAxiosPost";
import { notify } from "../Notify";
import { server } from "../../constants/server";
import axios from "axios";
import { updateCookie } from "../../utils/cookie";

/* eslint-disable react/prop-types */
const Profile = ({ user, setUserImage }) => {
  const userFullName = String(user?.fullName);
  const firstName =
    userFullName.split(" ")[0].charAt(0).toUpperCase() +
    userFullName.split(" ")[0].slice(1);
  const lastName =
    userFullName.split(" ")[1].charAt(0).toUpperCase() +
    userFullName.split(" ")[1].slice(1);
  const name = firstName + " " + lastName;

  const [isLoading, setIsLoading] = useState(false);

  const [displayImage, setDisplayImage] = useState("");

  const [form, setForm] = useState({
    userId: user?._id,
    title: "",
    fullName: name || "John Doe",
    about: "",
    email: user?.email,
    phone: user?.phone,
    photo: null,
  });

  // const config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };

  const handleCloudinaryUpload = (file) => {
    if (file) setIsLoading(true);
    const cloudName = "dw9oa2vpq";
    const presetKey = "akqax0vr";

    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", presetKey);
    axios
      .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, form)
      .then((res) => {
        setUserImage(res.data.url);
        setForm((prevState) => ({
          ...prevState,
          photo: res.data.url, // Set the data URL of the selected file
        }));
        notify("Image passed our standards", "info");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const { data, loading, error, postData } = useAxiosPost();

  const handleSubmit = async (e) => {
    e.preventDefault();

    postData(`${server}profile`, form);
  };

  useEffect(() => {
    if (error) {
      if (error?.response?.status === 500) {
        notify(error.response.data?.error?.message, "error");
      }
      notify(error.response?.data?.errorMessage, "error");

      console.log(error.response, "error");
    }
    if (data) {
      notify("Profile update successful.", "success");
      updateCookie("user", JSON.stringify(data.data));
      console.log(data, "data");
    }
  }, [data, error]);

  useEffect(() => {
    handleCloudinaryUpload(displayImage);
  }, [displayImage]);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDisplayImage(reader.result);
      };
      if (files[0]) {
        reader.readAsDataURL(files[0]);
      }
    } else {
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div className="p-6 shadow-round">
      <p className="font-bold text-xl uppercase">My account</p>
      <form action="" className="mt-5 space-y-5">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Photo
          </label>
          <div className="flex items-center space-x-4">
            {displayImage ? (
              <img
                src={displayImage}
                alt="Selected"
                className="w-32 h-32 object-cover rounded-lg border border-gray-300"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-100 border border-gray-300 rounded-lg">
                <label
                  htmlFor="imageInput"
                  className="cursor-pointer text-gray-600 hover:text-gray-800 text-center w-full h-full flex flex-col items-center justify-center"
                >
                  <span className="text-lg">+</span>
                  <span className="mt-2 block text-xs">Upload Photo</span>
                </label>
              </div>
            )}
            <input
              type="file"
              id="imageInput"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </div>
          {isLoading && (
            <p className="text-yellow-400 text-sm font-semibold animate-pulse">
              Checking image...
            </p>
          )}
          {displayImage && (
            <button
              onClick={() => setDisplayImage("")}
              className="text-red-500 hover:text-red-700"
            >
              Remove Image
            </button>
          )}
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm">
            Your Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder={`${user?.fullName}`}
            className="border border-solid py-2 px-4 rounded-md placeholder:capitalize"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="text-sm">
            Your Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="text-sm">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={`${user?.phone}`}
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder={`${user?.email}`}
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="about" className="text-sm">
            About Me
          </label>
          <textarea
            rows={5}
            name="about"
            id="about"
            value={form.about}
            onChange={handleChange}
            placeholder="About Me"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={form.photo === null ? true : false}
          className={`${
            form.photo === null
              ? "disabled:bg-gray-400 disabled:cursor-not-allowed"
              : ""
          } py-3 px-5 hover:drop-shadow-xl cursor-pointer text-white uppercase font-medium rounded-md bg-blue-400`}
        >
          {loading ? "Updating..." : " Send Update"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
