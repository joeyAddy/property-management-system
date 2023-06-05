import PriceCard from "./PriceCard";
import SectionTitle from "./SectionTitle";

const PricingPlans = () => {
  return (
    <section className="h-auto mt-10 md:mx-36 pb-10">
      <SectionTitle title="Pricing Plans" />
      <h4 className="text-lg text-gray-400 text-center -mt-9 mb-3">
        Checkout our plans to enjoy non stop optimum housing services
      </h4>
      <div className="grid lg:grid-cols-3 gap-8 mt-16">
        <PriceCard title="Personal" />
        <PriceCard title="business" />
        <PriceCard title="Ultimate" />
      </div>
    </section>
  );
};

export default PricingPlans;
