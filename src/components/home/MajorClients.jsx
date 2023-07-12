import ITB from "../../assets/images/itb.jpeg";
import montesora from "../../assets/images/montesora.png";
import exceltech from "../../assets/images/exceltech.jpg";
import formwork from "../../assets/images/formwork.jpg";
import elan from "../../assets/images/elan.jpg";
import CD from "../../assets/images/c and d.png";

const MajorClients = () => {
  return (
    <section className="h-auto md:-mt-10 px-6 md:px-36 py-10 bg-slate-50">
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-6">
        Our Major Clients
      </h2>
      <div className="grid lg:grid-cols-6 items-center justify-center mb-4 gap-8">
        <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
          <img
            className="object-contain  h-32"
            src={ITB}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
          <img
            className="object-contain  h-32"
            src={elan}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
          <img
            className="object-contain  h-32"
            src={montesora}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
          <img
            className="object-contain  h-32"
            src={CD}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
          <img
            className="object-contain  h-32"
            src={formwork}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
          <img
            className="object-contain  h-32"
            src={exceltech}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MajorClients;
