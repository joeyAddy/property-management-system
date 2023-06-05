import React from "react";


const CommonFeaturesCard = ({icon, title}) => {
  return <div className="col-span-1 h-auto shadow-lg hover:shadow-xl flex gap-4 p-5 bg-white">
    <div className=" text-5xl text-green-400 mt-4">
        {icon}
    </div>
    <div className="space-y-3">
        <p className="font-bold text-2xl text-gray-700">
            {title}
        </p>
        <p className="text-lg text-gray-600">Lorem must explain to you how all this mistaolt dete denouncing pleasure and pralsing plan wasnad</p>
    </div>
  </div>;
};

export default CommonFeaturesCard;
