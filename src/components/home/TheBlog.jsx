import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";
import IMG1 from "../../assets/images/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int.jpg";
import IMG2 from "../../assets/images/house-isolated-field.jpg";
import IMG3 from "../../assets/images/road-city.jpg";

const TheBlog = () => {
  return (
    <section className="h-auto mt-10 md:mx-36 pb-10">
      <SectionTitle title="The Blog" />
      <h4 className="text-lg text-gray-400 text-center -mt-9 mb-3">
        Checkout our plans to enjoy non stop optimum housing services
      </h4>
      <div className="grid lg:grid-cols-3 gap-8 mt-16">
        <BlogCard image={IMG1} title="Visual Design Concept" />
        <BlogCard image={IMG2} title="Real Estate Feswtival - 2018"/>
        <BlogCard image={IMG3} title="Latest Architectural Design"/>
      </div>
    </section>
  );
};

export default TheBlog;
