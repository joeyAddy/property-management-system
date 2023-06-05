import React from "react";
import PageHeader from "../components/PageHeader";
import Tabs from "../components/Tabs";

const Gallery = () => {
  return (
    <section className="h-auto ">
      <PageHeader title="gallery" />
      <div className="mt-16 md:mx-36">
        <Tabs />
      </div>
    </section>
  );
};

export default Gallery;
