import { motion } from "framer-motion";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils";
import TestimonialCard from "./TestimonialCard";

const Feedbacks = () => {
  return (
    <div className="py-12 px-12 bg-black-100 rounded-3xl">
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>what others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-7">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={testimonial.name}
            idx={idx}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
