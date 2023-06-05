import AgentCard from "./AgentCard";
import SectionTitle from "./SectionTitle";
import { Agents } from "../../constants/Agents";

const OurAgents = () => {
  return (
    <section className="h-auto mt-10 md:mx-36 pb-10">
      <SectionTitle title="Our Agents" />
      <h4 className="text-lg text-gray-400 text-center -mt-9 mb-3">
        View popular listing
      </h4>
      <div className="grid lg:grid-cols-4 gap-8 mt-5">
        {Agents.map((agent, index) => (
          <div key={index}>
            <AgentCard name={agent.name} image={agent.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAgents;
