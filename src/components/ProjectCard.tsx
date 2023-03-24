import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils";
import { github } from "../assets";

interface Props {
  idx: number;
  project: {
    name: string;
    description: string;
    tags: {
      name: string;
      color: string;
    }[];
    image: string;
    source_code_link: string;
  };
}
function ProjectCard({ project, idx }: Props) {
  return (
    <motion.div variants={fadeIn("up", "spring", idx * 0.5, 0.75)}>
      <Tilt className="p-5 rounded-2xl sm:w-80 w-full bg-tertiary">
        <div className="relative w-full h-56">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={project.source_code_link}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-2xl">{project.name}</h3>
          <p className="mt-2 text-secondary text-sm">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-sm`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default ProjectCard;
