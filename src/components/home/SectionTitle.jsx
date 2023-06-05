import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 class="text-center mb-8 pb-8 text-3xl font-bold relative before:absolute before:content-[''] before:h-[1px] before:w-[60px] before:left-1/2 before:bottom-[15px] before:-translate-x-1/2 before:bg-blue-400 after:absolute after:content-[''] after:h-[12px] after:w-[12px] after:left-1/2 after:bottom-[10px] after:-translate-x-1/2 after:bg-blue-400 after:rounded-full">
      {title}
    </h2>
  );
};

export default SectionTitle;
