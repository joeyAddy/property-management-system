import Tabs from "../Tabs";
import SectionTitle from "./SectionTitle";

const OurGallery = () => {
  return (
    <section className="h-auto mt-10 md:mx-36 pb-10">
      <SectionTitle title="Our Gallery" />
      <h4 className="text-lg text-gray-400 text-center -mt-9 mb-3">
        Explore exquisite designs
      </h4>
      <Tabs />
    </section>
  );
};

export default OurGallery;
