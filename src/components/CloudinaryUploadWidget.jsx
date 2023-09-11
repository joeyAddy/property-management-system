/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";

const CloudinaryUploadWidget = ({ setImageUrl, imageUrl }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    if (!cloudinaryRef.current) {
      alert(
        "cannot open image upload widget at the moment, please check your connecton"
      );
      return;
    }

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dw9oa2vpq",
        uploadPreset: "akqax0vr",
      },
      function (error, result) {
        console.log(result, "result");
        console.log(result?.event, "result event");
        if (result.event) {
          console.log(result.info.url);
          setImageUrl = result.info.url;
        }
      }
    );
  }, []);

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Selected"
              className="w-32 h-32 object-cover rounded-lg border border-gray-300"
            />
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                widgetRef.current?.open();
              }}
            >
              <span className="text-lg">+</span>
              <span className="mt-2 block text-xs">Upload Photo</span>
            </button>
          )}
        </div>
        {imageUrl !== "" && (
          <button
            onClick={() => setImageUrl("")}
            className="text-red-500 hover:text-red-700"
          >
            Remove Image
          </button>
        )}
      </div>
    </>
  );
};

export default CloudinaryUploadWidget;
