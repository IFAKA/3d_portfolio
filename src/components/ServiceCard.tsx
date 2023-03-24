import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { fadeIn } from "../utils";
function ServiceCard({
  idx,
  title,
  icon,
}: {
  idx: number;
  title: string;
  icon: string;
}) {
  return (
    <Tilt className="xs:w-64 w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * idx, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-3xl shadow-card"
      >
        <motion.div
          animate={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-3xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-xl font-bold text-center">{title}</h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
