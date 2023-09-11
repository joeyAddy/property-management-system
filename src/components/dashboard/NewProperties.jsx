/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import useAxiosPost from "../../hooks/useAxiosPost";
import { notify } from "../Notify";
import { server } from "../../constants/server";
import axios from "axios";

const NewProperties = ({ user }) => {
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState(null);
  const [imageArray, setImageArray] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    agent: user?._id,
    images: null,
    status: "for sale",
    type: "Apartment",
    price: "",
    area: "",
    bedrooms: "2",
    bathrooms: "1",
    address: "",
    state: "Kaduna",
    city: "Kaduna",
    country: "Kaduna",
    postalCode: "",
    description: "",
    age: "0-5 years",
    features: {
      airconditioning: true,
      swimmingPool: false,
      garden: false,
      laundryRoom: false,
      gym: false,
      windowCovering: false,
      alarm: false,
      centralHeating: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      features: {
        ...prevData.features,
        [name]: checked,
      },
    }));
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const files = Array.from(event.target.files);

    files &&
      files.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          const dataUrl = reader.result;
          setImageArray((prevImages) => [...prevImages, dataUrl]);
        };

        reader.readAsDataURL(file);
      });

    // Display selected images immediately
    const selectedImageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(selectedImageUrls);
  };

  const handleCloudinaryUpload = (files) => {
    if (files) setIsLoading(true);
    const cloudName = "dw9oa2vpq";
    const presetKey = "akqax0vr";

    const form = new FormData();

    files.forEach((file) => {
      form.append("file", file);
    });

    form.append("upload_preset", presetKey);
    axios
      .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, form)
      .then((res) => {
        setFormData((prevState) => ({
          ...prevState,
          images: res.data.url, // Set the data URL of the selected file
        }));
        notify("Image(s) passed our standards", "info");

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
    console.log(formData);
    postData(`${server}property`, formData);
  };

  useEffect(() => {
    if (error) {
      if (error?.response?.status === 500) {
        notify(error.response.data?.error, "error");
      }
      notify(error.response?.data?.errorMessage, "error");

      console.log(error.response.status, "error");
    }
    if (data) {
      notify("Profile update successful.", "success");
      console.log(data, "data");
    }
  }, [data, error]);

  useEffect(() => {
    console.log(imageArray, "Array of Images");
    handleCloudinaryUpload(imageArray);
  }, [imageArray]);

  return (
    <div className="p-6 shadow-round">
      <p className="font-bold text-xl uppercase">Basic Information</p>
      <form action="" className="mt-5 space-y-5">
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="text-sm">
            Property Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleInputChange}
            value={formData.title}
            placeholder="Property Title"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor="status" className="text-sm">
              Status
            </label>
            <select
              name="status"
              id="status"
              onChange={handleInputChange}
              value={formData.status}
              className="border border-solid py-2 px-4 rounded-md appearance-none"
            >
              <option value="for sale">For sale</option>
              <option value="for rent">For rent</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2  w-1/2">
            <label htmlFor="type" className="text-sm">
              Type
            </label>
            <select
              name="type"
              id="type"
              onChange={handleInputChange}
              value={formData.type}
              className="border border-solid py-2 px-4 rounded-md appearance-none"
            >
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Lot">Lot</option>
              <option value="Garage">Garage</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col space-y-2 w-1/4">
            <label htmlFor="price" className="text-sm">
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={handleInputChange}
              value={formData.price}
              placeholder="NGN"
              className="border border-solid py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/4">
            <label htmlFor="area" className="text-sm">
              Area/Location
            </label>
            <input
              type="text"
              name="area"
              id="area"
              onChange={handleInputChange}
              value={formData.area}
              placeholder="SqFt"
              className="border border-solid py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/4">
            <label htmlFor="bedroom" className="text-sm">
              Bedroom(s)
            </label>
            <select
              name="bedroom"
              id="bedroom"
              onChange={handleInputChange}
              value={formData.bedrooms}
              className="border border-solid py-2 px-4 rounded-md appearance-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2  w-1/4">
            <label htmlFor="bathroom" className="text-sm">
              Bathroom(s)
            </label>
            <select
              name="bathroom"
              id="bathroom"
              onChange={handleInputChange}
              value={formData.bathrooms}
              className="border border-solid py-2 px-4 rounded-md appearance-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <p className="font-bold text-xl uppercase pt-3">Property Gallery</p>
        <div className="relative inline-block w-full">
          <div
            className="bg-blue-400 text-white text-center py-2 px-4 rounded cursor-pointer"
            onClick={handleUploadButtonClick}
          >
            Upload Image
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            onChange={handleFileSelected}
            multiple // Allow multiple file selection
          />
          {selectedImages &&
            selectedImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Uploaded Image ${index + 1}`}
                className="mt-4 w-full h-48 object-cover mb-3 border border-solid border-blue-400 rounded-md"
              />
            ))}
          {isLoading && selectedImages && (
            <div className="w-full bg-neutral-200 dark:bg-neutral-600">
              <div
                className="bg-blue-400 p-1 py-2 text-center text-xs font-medium leading-none text-primary-100 transitioin-all duration-300 ease-in-out"
                style={{
                  width: `${formData.images !== null ? "100%" : "25%"}`,
                }}
              >
                Checking Image {formData.images !== null ? " 100%" : " 25%"}
              </div>
            </div>
          )}
        </div>
        <p className="font-bold text-xl uppercase pt-3">Location</p>
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor="address" className="text-sm">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleInputChange}
              value={formData.address}
              placeholder="Address"
              className="border border-solid py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-2  w-1/2">
            <label htmlFor="state" className="text-sm">
              State
            </label>
            <select
              name="state"
              id="state"
              onChange={handleInputChange}
              value={formData.state}
              className="border border-solid py-2 px-4 rounded-md appearance-none"
            >
              <option value="Kaduna">Kaduna</option>
              <option value="Abuja">Abuja</option>
              <option value="Lagos">Lagos</option>
              <option value="Port Hacourt">Port Hacourt</option>
              <option value="Cross River">Cross River</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col space-y-2  w-1/2">
            <label htmlFor="city" className="text-sm">
              City
            </label>
            <select
              name="city"
              id="city"
              className="border border-solid py-2 px-4 rounded-md appearance-none"
            >
              <option value="Kaduna">Kaduna</option>
              <option value="FCT">FCT</option>
              <option value="Gbagada">Gbagada</option>
              <option value="Port Hacourt">Port Hacourt</option>
              <option value="Cross River">Cross River</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor="postalCode" className="text-sm">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              onChange={handleInputChange}
              value={formData.postalCode}
              placeholder="Postal Code"
              className="border border-solid py-2 px-4 rounded-md"
            />
          </div>
        </div>
        <p className="font-bold text-xl uppercase pt-3">Detailed Information</p>
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="postalCode" className="text-sm">
            Description/Highlights
          </label>
          <textarea
            rows={5}
            name="description"
            id="description"
            onChange={handleInputChange}
            value={formData.description}
            placeholder="Detailed description"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2  w-full">
          <label htmlFor="age" className="text-sm">
            Building Age (optional)
          </label>
          <select
            name="age"
            id="age"
            onChange={handleInputChange}
            value={formData.age}
            className="border border-solid py-2 px-4 rounded-md appearance-none"
          >
            <option value="0-5 years">0-5 years</option>
            <option value="0-10 years">0-10 years</option>
            <option value="0-20 years">0-20 years</option>
            <option value="0-25 years">0-25 years</option>
          </select>
        </div>
        <p className="font-bold text-xl uppercase pt-3">Features (Optional)</p>
        <div className="grid lg:grid-cols-3">
          <div className="col-span-1">
            <div className="mb-3 block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-400 dark:checked:bg-blue-400 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                onChange={handleCheckboxChange}
                value={formData.features.airconditioning}
                id="aircondtioning"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="aircondtioning"
              >
                Air Conditioning
              </label>
            </div>
            <div className="mb-3 block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-400 dark:checked:bg-blue-400 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                onChange={handleCheckboxChange}
                value={formData.features.swimmingPool}
                id="swimmingPool"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="swimmingPool"
              >
                Swimming Pool
              </label>
            </div>
            <div className="mb-3 block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-400 dark:checked:bg-blue-400 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                onChange={handleCheckboxChange}
                value={formData.features.garden}
                id="garden"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="garden"
              >
                Garden
              </label>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-3 block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-400 dark:checked:bg-blue-400 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                onChange={handleCheckboxChange}
                value={formData.features.laundryRoom}
                id="laundryRoom"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="laundryRoom"
              >
                Laundry Room
              </label>
            </div>
            <div className="mb-3 block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-400 dark:checked:bg-blue-400 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                onChange={handleCheckboxChange}
                value={formData.features.gym}
                id="gym"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="gym"
              >
                Gym
              </label>
            </div>
            <div className="mb-3 block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-400 dark:checked:bg-blue-400 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                onChange={handleCheckboxChange}
                value={formData.features.windowCovering}
                id="windowCovering"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="windowCovering"
              >
                Window Covering
              </label>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-3 block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-400 dark:checked:bg-blue-400 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                onChange={handleCheckboxChange}
                value={formData.features.alarm}
                id="alarm"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="alarm"
              >
                Alarm
              </label>
            </div>
            <div className="mb-3 block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-400 checked:bg-blue-400 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-400 dark:checked:bg-blue-400 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                onChange={handleCheckboxChange}
                value={formData.features.centralHeating}
                id="centralHeating"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="centralHeating"
              >
                Central Heating
              </label>
            </div>
          </div>
        </div>
        <p className="font-bold text-xl uppercase pt-3">Contact Details</p>
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
              value={formData.name}
              placeholder="Name"
              className="border border-solid py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor="phone" className="text-sm">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={handleInputChange}
              value={formData.phone}
              placeholder="Phone"
              className="border border-solid py-2 px-4 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={formData.images === null ? true : false}
          className={`${
            formData.images === null
              ? "disabled:bg-gray-400 disabled:cursor-not-allowed"
              : ""
          } py-3 px-5 hover:drop-shadow-xl text-white uppercase font-medium rounded-md bg-blue-400`}
        >
          {isLoading
            ? "Bundling Image(s)..."
            : loading
            ? "Submitting..."
            : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default NewProperties;
