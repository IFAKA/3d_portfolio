import { motion } from "framer-motion";
import { staggerContainer } from "../utils";
import { styles } from "../styles";

const SectionWrapper = (Component: () => JSX.Element, idName: string) => () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName} />
      <Component />
    </motion.section>
  );
};

export default SectionWrapper;
