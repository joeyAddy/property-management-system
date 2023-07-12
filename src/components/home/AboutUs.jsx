import SectionTitle from "./SectionTitle";
import house1 from "../../assets/images/livingroom2.jpg";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="h-auto -mt-10 px-6 md:px-36 pb-10 bg-slate-50">
      <SectionTitle title="About Us" />
      <h4 className="text-lg text-gray-400 text-center -mt-9 mb-3">
        These are the hottest, sleekest Apartments in town!
      </h4>
      <div className="mt-5">
        <div className="flex flex-col gap-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row">
          <img
            className="h-[80] w-full object-center md:h-[500px] md:w-[45%]"
            src={house1}
            alt=""
          />
          <div className="flex flex-col justify-start space-y-4 p-6 bg-white">
            <h5 className="mb-2 text-2xl font-medium text-neutral-800 dark:text-neutral-50">
              Who We Are
            </h5>
            <h2 className="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-50">
              Best and Award Winning Real Estate Business in USA 2019
            </h2>
            <p className=" text-gray-600 text-md dark:text-neutral-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              nostrum, doloremque quaerat sit tempora eius est reiciendis
              accusamus magnam quae. Explicabo dolore officia, iure a ullam
              aliquam nemo excepturi, repellat. uod ut delectus ad tempora.
            </p>
            <div className="grid lg:grid-cols-2 md:gap-16 gap-6 pt-3">
              <div className="col-span-1 h-auto space-y-3">
                <div className="flex md:gap-8 flex-col md:flex-row items-center mb-3">
                  <AiOutlineSafetyCertificate className="text-5xl text-green-400" />
                  <p className="text-xl font-medium">Certified Company</p>
                </div>
                <p className="text-gray-600 text-md">
                  We'll generate a sitemap for your site, submit it to search
                  engine is and track crawler access.
                </p>
              </div>
              <div className="col-span-1 h-auto space-y-3">
                <div className="flex md:gap-8 flex-col md:flex-row items-center mb-3">
                  <FaThumbsUp className="text-5xl text-green-400" />
                  <p className="text-xl font-medium">Highly Experienced</p>
                </div>
                <p className="text-gray-600 text-md">
                  We'll generate a sitemap for your site, submit it to search
                  engine is and track crawler access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
