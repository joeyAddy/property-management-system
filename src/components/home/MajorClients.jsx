import ITB from "../../assets/images/itb.jpeg";
import montesora from "../../assets/images/montesora.png";
import exceltech from "../../assets/images/exceltech.jpg";
import formwork from "../../assets/images/formwork.jpg";
import elan from "../../assets/images/elan.jpg";
import CD from "../../assets/images/c and d.png";

const MajorClients = () => {
  return (
    <section className="h-auto md:-mt-10 px-6 md:px-36 py-10 md:py-20 bg-slate-50 grid lg:grid-cols-6 items-center justify-center gap-8">
      <h2 className="text-2xl md:text-4xl text-center font-bold">
        Our Major Clients
      </h2>
      <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
        <img className="object-contain  h-32" src={ITB} alt="" />
      </div>
      <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
        <img className="object-contain  h-32" src={elan} alt="" />
      </div>
      <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
        <img className="object-contain  h-32" src={montesora} alt="" />
      </div>
      <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
        <img className="object-contain  h-32" src={CD} alt="" />
      </div>
      <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
        <img className="object-contain  h-32" src={formwork} alt="" />
      </div>
      <div className="col-span-1 px-3 space-y-3 shadow-md flex items-center justify-center bg-white">
        <img className="object-contain  h-32" src={exceltech} alt="" />
      </div>
    </section>
  );
};

export default MajorClients;
