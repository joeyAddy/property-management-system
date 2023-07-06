import React from "react";
import PageHeader from "../components/PageHeader";

const Property = () => {
  return (
    <section className="h-auto">
      <PageHeader title="property" />
      <div className="flex flex-col">
        <div className="grid lg:grid-cols-3 my-16 gap-8 mx-10 md:mx-36"></div>
      </div>
    </section>
  );
};

export default Property;
