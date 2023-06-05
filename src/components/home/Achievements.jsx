import { FaPeopleCarry } from "react-icons/fa";

const Achievements = () => {
  return (
    <div className="mt-5 h-[500px] w-full">
      <div
        style={{
          backgroundPosition: "50%",
        }}
        className="h-full w-full grid lg:grid-cols-4 gap-24 items-center px-36 relative overflow-hidden bg-no-repeat bg-fixed bg-center bg-cover achievements"
      >
        <div className="flex flex-col items-center space-y-7">
          <div className="rounded p-6 text-5xl bg-white bg-opacity-100">
            <FaPeopleCarry className="text-green-400" />
          </div>
          <p className="text-5xl font-bold text-white">453</p>
          <p className="text-2xl font-medium text-white">HAPPY CUSTOMERS</p>
        </div>
        <div className="flex flex-col items-center space-y-7">
          <div className="rounded p-6 text-5xl bg-white bg-opacity-100">
            <FaPeopleCarry className="text-green-400" />
          </div>
          <p className="text-5xl font-bold text-white">583</p>
          <p className="text-2xl font-medium text-white text-center">
            COMPLETED PROJECTS
          </p>
        </div>
        <div className="flex flex-col items-center space-y-7">
          <div className="rounded p-6 text-5xl bg-white bg-opacity-100">
            <FaPeopleCarry className="text-green-400" />
          </div>
          <p className="text-5xl font-bold text-white">343</p>
          <p className="text-2xl font-medium text-white">PROPERTIES SOLD</p>
        </div>
        <div className="flex flex-col items-center space-y-7">
          <div className="rounded p-6 text-5xl bg-white bg-opacity-100">
            <FaPeopleCarry className="text-green-400" />
          </div>
          <p className="text-5xl font-bold text-white">33</p>
          <p className="text-2xl font-medium text-white">AWARDS WIN</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
