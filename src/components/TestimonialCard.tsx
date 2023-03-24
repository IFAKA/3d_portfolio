import { motion } from "framer-motion";
import { fadeIn } from "../utils";

interface Props {
  idx: number;
  testimonial: {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
  };
}

function TestimonialCard({ testimonial, idx }: Props) {
  return (
    <motion.div
      variants={fadeIn("", "spring", idx * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-80 w-full"
    >
      <p className="text-white font-black text-5xl">"</p>

      <p className="text-white tracking-wider text-lg">
        {testimonial.testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-base">
            <span className="blue-text-gradient">@</span>
            {testimonial.name}
          </p>
          <p className="mt-1 text-secondary text-xs">
            {testimonial.designation} of {testimonial.company}
          </p>
        </div>

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
