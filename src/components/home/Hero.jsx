import HeroImage from "../../assets/images/spacious-hotel-room-with-rug.jpg";

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-fixed bg-center bg-cover hero"
      style={{
        backgroundPosition: "50%",
        height: "500px",
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white px-6 md:px-12">
            <h4
              style={{ fontFamily: "'Lato', sans-serif;" }}
              className="mb-3 tracking-widest text-xl"
            >
              Your Real Estate Solution
            </h4>
            <h1 className="text-5xl md:text-4xl xl:text-7xl font-semibold tracking-tighter mb-6">
              The best Apartments <br /> you'd ever find
            </h1>
            <h4
              style={{ fontFamily: "'Lato', sans-serif;" }}
              className="mb-6  tracking-widest text-xl"
            >
              Your Real Estate Solution
            </h4>
            <button
              type="button"
              className="inline-block px-7 py-3 bg-blue-500 font-bold text-white text-sm leading-snug uppercase rounded hover:bg-opacity-10 hover:border hover:animate-bounce hover:border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
