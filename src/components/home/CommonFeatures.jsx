import CommonFeaturesCard from "./CommonFeaturesCard";
import SectionTitle from "./SectionTitle";
import {
  FaBolt,
  FaBuilding,
  FaCanadianMapleLeaf,
  FaCrown,
  FaHandshake,
  FaHome,
} from "react-icons/fa";
import { BsStack } from "react-icons/bs";

const CommonFeatures = () => {
  return (
    <section className="h-auto mt-10 px-6 md:px-36 py-10  bg-slate-50">
      <SectionTitle title="Common Features" />
      <h4 className="text-lg text-gray-400 text-center -mt-9 mb-3">
        Our irresitible features!
      </h4>
      <div className="grid lg:grid-cols-3 gap-8 mt-5">
        <CommonFeaturesCard icon={<FaBuilding />} title="Full Furnished" />
        <CommonFeaturesCard icon={<FaCrown />} title="Royal Touch Paint" />
        <CommonFeaturesCard icon={<BsStack />} title="Latest Interior Design" />
        <CommonFeaturesCard icon={<FaBolt />} title="Non Stop Security" />
        <CommonFeaturesCard
          icon={<FaCanadianMapleLeaf />}
          title="Living Inside a Nature"
        />
        <CommonFeaturesCard icon={<FaHandshake />} title="Luxurious Fittings" />
      </div>
    </section>
  );
};

export default CommonFeatures;
