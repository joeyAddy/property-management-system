import Hero from "../components/home/Hero";
import SearchProperties from "../components/home/SearchProperties";
import PopularListing from "../components/home/PopularListing";
import OurAgents from "../components/home/OurAgents";
import OurGallery from "../components/home/OurGallery";
import Testimonials from "../components/home/Testimonials";
import Achievements from "../components/home/Achievements";
import CommonFeatures from "../components/home/CommonFeatures";
import AboutUs from "../components/home/AboutUs";
import MajorClients from "../components/home/MajorClients";
import PricingPlans from "../components/home/PricingPlans";
import TheBlog from "../components/home/TheBlog";
import LatestListings from "../components/home/LatestListings";

const Home = () => {
  return (
    <div className="h-auto w-full">
      <Hero />
      <SearchProperties />
      <PopularListing />
      <OurAgents />
      <CommonFeatures />
      <LatestListings />
      <AboutUs />
      <Achievements />
      <OurGallery />
      <MajorClients />
      <PricingPlans />
      <Testimonials />
      <TheBlog />
    </div>
  );
};

export default Home;
