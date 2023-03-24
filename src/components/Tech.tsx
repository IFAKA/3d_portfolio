import { technologies } from "../constants";
import { Ball } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <Ball icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
